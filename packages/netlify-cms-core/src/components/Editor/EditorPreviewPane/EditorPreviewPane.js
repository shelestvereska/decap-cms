import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import { List, Map } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Frame from 'react-frame-component';
import { lengths } from 'netlify-cms-ui-default';
import { resolveWidget, getPreviewTemplate, getPreviewStyles } from 'Lib/registry';
import { ErrorBoundary } from 'UI';
import { selectTemplateName, selectInferedField } from 'Reducers/collections';
import { INFERABLE_FIELDS } from 'Constants/fieldInference';
import EditorPreviewContent from './EditorPreviewContent.js';
import PreviewHOC from './PreviewHOC';
import EditorPreview from './EditorPreview';

const PreviewPaneFrame = styled(Frame)`
  width: 100%;
  height: 100%;
  border: none;
  background: #fff;
  border-radius: ${lengths.borderRadius};
`;

export default class PreviewPane extends React.Component {
  getWidget = (field, value, metadata, props, idx = null) => {
    const { getAsset, entry, locale } = props;
    const widget = resolveWidget(field.get('widget'));
    const key = idx ? field.get('name') + '_' + idx : field.get('name');
    const valueIsInMap = value && !widget.allowMapValue && Map.isMap(value);

    /**
     * Use an HOC to provide conditional updates for all previews.
     */
    return !widget.preview ? null : (
      <PreviewHOC
        previewComponent={widget.preview}
        key={key}
        field={field}
        getAsset={getAsset}
        value={valueIsInMap ? value.get(field.get('name')) : value}
        entry={entry}
        fieldsMetaData={metadata}
        resolveWidget={resolveWidget}
        locale={locale}
      />
    );
  };

  inferedFields = {};

  inferFields() {
    const titleField = selectInferedField(this.props.collection, 'title');
    const shortTitleField = selectInferedField(this.props.collection, 'shortTitle');
    const authorField = selectInferedField(this.props.collection, 'author');

    this.inferedFields = {};
    if (titleField) this.inferedFields[titleField] = INFERABLE_FIELDS.title;
    if (shortTitleField) this.inferedFields[shortTitleField] = INFERABLE_FIELDS.shortTitle;
    if (authorField) this.inferedFields[authorField] = INFERABLE_FIELDS.author;
  }

  /**
   * Returns the widget component for a named field, and makes recursive calls
   * to retrieve components for nested and deeply nested fields, which occur in
   * object and list type fields. Used internally to retrieve widgets, and also
   * exposed for use in custom preview templates.
   */
  widgetFor = (
    name,
    fields = this.props.fields,
    values = this.props.entry.get('data'),
    fieldsMetaData = this.props.fieldsMetaData,
  ) => {
    // We retrieve the field by name so that this function can also be used in
    // custom preview templates, where the field object can't be passed in.
    let field = fields && fields.find(f => f.get('name') === name);
    let value = values && values.get(field.get('name'));
    let nestedFields = field.get('fields');
    let singleField = field.get('field');
    let metadata = fieldsMetaData && fieldsMetaData.get(field.get('name'), Map());

    if (nestedFields) {
      field = field.set('fields', this.getNestedWidgets(nestedFields, value, metadata));
    }

    if (singleField) {
      field = field.set('field', this.getSingleNested(singleField, value, metadata));
    }

    const labelledWidgets = ['string', 'text', 'number'];
    if (Object.keys(this.inferedFields).indexOf(name) !== -1) {
      value = this.inferedFields[name].defaultPreview(value);
    } else if (
      value &&
      labelledWidgets.indexOf(field.get('widget')) !== -1 &&
      value.toString().length < 50
    ) {
      value = (
        <div>
          <strong>{field.get('label', field.get('name'))}:</strong> {value}
        </div>
      );
    }

    return value ? this.getWidget(field, value, metadata, this.props) : null;
  };

  /**
   * Retrieves widgets for nested fields (children of object/list fields)
   */
  getNestedWidgets = (fields, values, fieldsMetaData) => {
    // Fields nested within a list field will be paired with a List of value Maps.
    if (List.isList(values)) {
      return values.map(value => this.widgetsForNestedFields(fields, value, fieldsMetaData));
    }
    // Fields nested within an object field will be paired with a single Map of values.
    return this.widgetsForNestedFields(fields, values, fieldsMetaData);
  };

  getSingleNested = (field, values, fieldsMetaData) => {
    if (List.isList(values)) {
      return values.map((value, idx) =>
        this.getWidget(field, value, fieldsMetaData.get(field.get('name')), this.props, idx),
      );
    }
    return this.getWidget(field, values, fieldsMetaData.get(field.get('name')), this.props);
  };

  /**
   * Use widgetFor as a mapping function for recursive widget retrieval
   */
  widgetsForNestedFields = (fields, values, fieldsMetaData) => {
    return fields.map(field => this.widgetFor(field.get('name'), fields, values, fieldsMetaData));
  };

  /**
   * This function exists entirely to expose nested widgets for object and list
   * fields to custom preview templates.
   *
   * TODO: see if widgetFor can now provide this functionality for preview templates
   */
  widgetsFor = name => {
    const { fields, entry, fieldsMetaData } = this.props;
    const field = fields.find(f => f.get('name') === name);
    const nestedFields = field && field.get('fields');
    const value = entry.getIn(['data', field.get('name')]);
    const metadata = fieldsMetaData.get(field.get('name'), Map());

    if (List.isList(value)) {
      return value.map(val => {
        const widgets =
          nestedFields &&
          Map(
            nestedFields.map((f, i) => [
              f.get('name'),
              <div key={i}>{this.getWidget(f, val, metadata.get(f.get('name')), this.props)}</div>,
            ]),
          );
        return Map({ data: val, widgets });
      });
    }

    return Map({
      data: value,
      widgets:
        nestedFields &&
        Map(
          nestedFields.map(f => [
            f.get('name'),
            this.getWidget(f, value, metadata.get(f.get('name')), this.props),
          ]),
        ),
    });
  };

  render() {
    const { entry, collection } = this.props;

    if (!entry || !entry.get('data')) {
      return null;
    }

    const previewComponent =
      getPreviewTemplate(selectTemplateName(collection, entry.get('slug'))) || EditorPreview;

    this.inferFields();

    const previewProps = {
      ...this.props,
      widgetFor: this.widgetFor,
      widgetsFor: this.widgetsFor,
    };

    const styleEls = getPreviewStyles().map((style, i) => {
      if (style.raw) {
        return <style key={i}>{style.value}</style>;
      }
      return <link key={i} href={style.value} type="text/css" rel="stylesheet" />;
    });

    if (!collection) {
      <PreviewPaneFrame head={styleEls} />;
    }

    const initialContent = `
<!DOCTYPE html>
<html>
  <head><base target="_blank"/></head>
  <body><div></div></body>
</html>
`;

    return (
      <ErrorBoundary>
        <PreviewPaneFrame head={styleEls} initialContent={initialContent}>
          <EditorPreviewContent {...{ previewComponent, previewProps }} />
        </PreviewPaneFrame>
      </ErrorBoundary>
    );
  }
}

PreviewPane.propTypes = {
  collection: ImmutablePropTypes.map.isRequired,
  fields: ImmutablePropTypes.list.isRequired,
  entry: ImmutablePropTypes.map.isRequired,
  fieldsMetaData: ImmutablePropTypes.map.isRequired,
  getAsset: PropTypes.func.isRequired,
};

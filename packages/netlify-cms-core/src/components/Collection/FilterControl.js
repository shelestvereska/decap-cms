import React from 'react';
import styled from '@emotion/styled';
import { translate } from 'react-polyglot';
import {
  buttons,
  Dropdown,
  DropdownCheckedItem,
  StyledDropdownButton,
} from 'netlify-cms-ui-default';

const FilterButton = styled(StyledDropdownButton)`
  ${buttons.button};
  ${buttons.medium};
  ${buttons.grayText};
  font-size: 14px;

  &:after {
    top: 11px;
  }
`;

const FilterControl = ({ viewFilters, t, onFilterClick, filter }) => {
  return (
    <Dropdown
      renderButton={() => {
        return <FilterButton>{t('collection.collectionTop.filter')}</FilterButton>;
      }}
      closeOnSelection={false}
      dropdownTopOverlap="30px"
      dropdownPosition="left"
    >
      {viewFilters.map(viewFilter => {
        return (
          <DropdownCheckedItem
            key={viewFilter.id}
            label={viewFilter.label}
            id={viewFilter.id}
            checked={filter.getIn([viewFilter.id, 'active'], false)}
            onClick={() => onFilterClick(viewFilter)}
          />
        );
      })}
    </Dropdown>
  );
};

export default translate()(FilterControl);

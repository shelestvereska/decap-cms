import React, { PropTypes } from 'react';

export default class NumberControl extends React.Component {
  handleChange = (e) => {
    this.props.onChange(e.target.value);
  };

  render() {
    return <input type="number" id={this.props.forID} value={this.props.value || ''} onChange={this.handleChange} />;
  }
}

NumberControl.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.node,
  forID: PropTypes.string,
};

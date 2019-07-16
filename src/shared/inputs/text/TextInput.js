import React from "react";
import PropTypes from "prop-types";

class TextInput extends React.Component {
  render() {
    const props = this.props;
    return (
      <div className="form-group row">
        <label className="col-sm-3 col-form-label">{props.label}</label>
        <input
          className="col-sm-9"
          value={props.text}
          type={props.type}
          onChange={e => props.onChange(e, props.keyword)}
        />
      </div>
    );
  }
}

TextInput.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  keyword: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func
};

export default TextInput;

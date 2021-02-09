import React, { Component } from "react";

import { BaseInput } from "./styled/inputs";
import PropTypes from "prop-types";
import styled from "styled-components";

const ChractersLeftLabel = styled.div`
  width: 100%;
  text-align: right;
  margin-top: 0.5rem;
  box-sizing: border-box;
`;

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInput: "",
    };
  }

  handleChange = (event) => {
    this.setState({ currentInput: event.target.value });
  };

  getMaxLengthLabel = () => {
    return this.state.currentInput.length + "/" + this.props.maxLength;
  };

  render = () => {
    return (
      <>
        <BaseInput
          maxLength={this.props.maxLength}
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
          type="text"
          value={this.state.currentInput}
        ></BaseInput>
        {this.props.maxLength && (
          <ChractersLeftLabel>{this.getMaxLengthLabel()}</ChractersLeftLabel>
        )}
      </>
    );
  };
}

TextInput.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
};

export default TextInput;

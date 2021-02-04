import React, { Component } from "react";
import styled from "styled-components";

import { BaseInput } from "./styled/inputs";

const ChractersLeftLabel = styled.div`
  width: 100%;
  text-align: right;
  margin-top: 0.5rem;
  box-sizing:border-box
`;

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInput: "",
    };
  }

  handleChange(event) {
    this.setState({ currentInput: event.target.value });
  }

  getMaxLengthLabel() {
    return this.state.currentInput.length + "/" + this.props.maxLength;
  }

  render() {
    return (
      <>
        <BaseInput
          onChange={this.handleChange.bind(this)}
          placeholder={this.props.placeholder}
          value={this.state.currentInput}
          type="text"
          maxLength={this.props.maxLength}
        ></BaseInput>
        {this.props.maxLength && (
          <ChractersLeftLabel>{this.getMaxLengthLabel()}</ChractersLeftLabel>
        )}
      </>
    );
  }
}

export default TextInput;

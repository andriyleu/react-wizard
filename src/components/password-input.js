import React, { Component } from "react";
import styled from "styled-components";

import { BaseInput } from "./styled/inputs";



class PasswordInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInput: "",
    };
  }

  handleChange(event) {
    this.setState({ currentInput: event.target.value });
  }

  render() {
    return (
      <>
        <BaseInput
          onChange={this.handleChange.bind(this)}
          placeholder={this.props.placeholder}
          value={this.state.currentInput}
          type="password"
          maxLength={this.props.maxLength}
        ></BaseInput>
      </>
    );
  }
}

export default PasswordInput;

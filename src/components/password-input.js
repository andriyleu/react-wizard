import React, { Component } from "react";
import styled from "styled-components";

import { BaseInput } from "./styled/inputs";

import { Eye } from "@styled-icons/bootstrap/Eye";
import { EyeSlash } from "@styled-icons/bootstrap/EyeSlash";

const PasswordInputWrapper = styled.div`
  position: relative;
`;

const PasswordAlert = styled.div`
  width: 2rem;
  height: 0.1rem;
  position: absolute;
  top: 3.25rem;
  left: 0.1rem;
  border-bottom-left-radius: 2rem;
  background-color: red;
`;

const PasswordEyeIcon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

class PasswordInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInput: "",
      showPassword: false,
    };
  }

  handleChange(event) {
    this.setState({ currentInput: event.target.value });
  }

  togglePasswordVisibility(event) {
    this.setState({ showPassword: !this.state.showPassword });
  }

  render() {
    return (
      <>
        <PasswordInputWrapper>
          <PasswordAlert></PasswordAlert>
          <PasswordEyeIcon onClick={this.togglePasswordVisibility.bind(this)}>
            {this.state.showPassword ? (
              <EyeSlash size={24}></EyeSlash>
            ) : (
              <Eye size={24}></Eye>
            )}
          </PasswordEyeIcon>
          <BaseInput
            required
            onChange={this.handleChange.bind(this)}
            placeholder={this.props.placeholder}
            value={this.state.currentInput}
            type={this.state.showPassword ? "text" : "password"}
            maxLength={this.props.maxLength}
            minLength={8}
            pattern="(?=.*\d)(?=.*[A-Z]).*"
          ></BaseInput>
        </PasswordInputWrapper>
      </>
    );
  }
}

export default PasswordInput;

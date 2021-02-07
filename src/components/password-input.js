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

  ${({ isEmpty, isValid }) => {
    switch (true) {
      case isValid:
        return `background-color : green`;
      case isEmpty:
        return `background-color : red`;
      default:
        return `background-color : orange`;
    }
  }}
`;

const PasswordEyeIcon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const InputLabel = styled.div`
  font-weight: bold;
  padding-bottom: 1rem;

  &:first-child {
    padding-right: 2rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-right: 0 !important;
  }
`;

const ErrorLabel = styled.label`
  color: red;
  margin-top: 0.5rem;

  input:placeholder-shown {
    border-color: red;
  }
`;

class PasswordInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInput: "",
      showPassword: false,
      isValidPassword: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
  }

  handleChange(event) {
    const password = event.target.value;
    const isValidPassword = event.target.checkValidity();

    this.setState({
      currentInput: password,
      isValidPassword: isValidPassword,
    });

    this.props.onChange(password, isValidPassword);
  }

  togglePasswordVisibility(event) {
    this.setState({ showPassword: !this.state.showPassword });
  }

  updateErrors() {
    this.setState({
      isValidPassword: new RegExp(`^${this.props.pattern}$`).test(
        this.state.currentInput
      ),
    });
  }

  render() {
    return (
      <>
        <InputLabel>
          {this.props.title}
          <PasswordInputWrapper>
            <PasswordAlert
              isEmpty={this.state.currentInput.length === 0}
              isValid={this.state.isValidPassword}
            ></PasswordAlert>
            <PasswordEyeIcon onClick={this.togglePasswordVisibility.bind(this)}>
              {this.state.showPassword ? (
                <EyeSlash size={24}></EyeSlash>
              ) : (
                <Eye size={24}></Eye>
              )}
            </PasswordEyeIcon>
            <BaseInput
              required
              onChange={this.handleChange}
              placeholder={this.props.placeholder}
              value={this.state.currentInput}
              type={this.state.showPassword ? "text" : "password"}
              maxLength={this.props.maxLength}
              minLength={this.props.minLength}
              pattern={this.props.pattern}
              onInvalid={this.handleInvalid}
            ></BaseInput>
          </PasswordInputWrapper>
          {!this.state.isValidPassword &&
            this.state.currentInput.length !== 0 && (
              <ErrorLabel>{this.props.error}</ErrorLabel>
            )}
        </InputLabel>
      </>
    );
  }
}

export default PasswordInput;

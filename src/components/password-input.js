import React, { Component } from "react";

import { BaseInput } from "./styled/inputs";
import { Eye } from "@styled-icons/bootstrap/Eye";
import { EyeSlash } from "@styled-icons/bootstrap/EyeSlash";
import PropTypes from "prop-types";
import nextId from "react-id-generator";
import styled from "styled-components";

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

const InputLabelContainer = styled.div`
  padding-bottom: 1rem;

  &:first-child {
    padding-right: 2rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-right: 0 !important;
  }
`;

const InputLabel = styled.label`
  font-weight: bold;
`;

const ErrorContainer = styled.div`
  height: 1.25rem;
`;

const ErrorLabel = styled.label`
  color: red;
`;

class PasswordInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInput: "",
      showPassword: false,
      isValidPassword: false,
      hasBlured: false,
    };
    this.passwordInputUniqueId = nextId();
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.pattern !== this.props.pattern) {
      this.updateErrors();
    }
  };

  handleOnBlur = () => {
    this.setState({ hasBlured: true });
  };

  handleChange = (event) => {
    const password = event.target.value;
    const isValidPassword = event.target.checkValidity();

    this.setState({
      currentInput: password,
      isValidPassword: isValidPassword,
    });

    this.props.onChange(password, isValidPassword);
  };

  togglePasswordVisibility = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  updateErrors = () => {
    this.setState({
      isValidPassword: new RegExp(`^${this.props.pattern}$`).test(
        this.state.currentInput
      ),
    });
  };

  render = () => {
    return (
      <>
        <InputLabelContainer>
          <InputLabel>
            {this.props.title}
            <PasswordInputWrapper>
              <PasswordAlert
                isEmpty={this.state.currentInput.length === 0}
                isValid={this.state.isValidPassword}
              ></PasswordAlert>
              <PasswordEyeIcon onClick={this.togglePasswordVisibility}>
                {this.state.showPassword ? (
                  <EyeSlash size={24}></EyeSlash>
                ) : (
                  <Eye size={24}></Eye>
                )}
              </PasswordEyeIcon>
              <BaseInput
                id={this.passwordInputUniqueId}
                maxLength={this.props.maxLength}
                minLength={this.props.minLength}
                onBlur={this.handleOnBlur}
                onChange={this.handleChange}
                onInvalid={this.handleInvalid}
                pattern={this.props.pattern}
                placeholder={this.props.placeholder}
                required
                type={this.state.showPassword ? "text" : "password"}
                value={this.state.currentInput}
              ></BaseInput>
            </PasswordInputWrapper>
            <ErrorContainer>
              <ErrorLabel htmlFor={this.passwordInputUniqueId}>
                {!this.state.isValidPassword &&
                  this.state.hasBlured &&
                  this.props.error}
              </ErrorLabel>
            </ErrorContainer>
          </InputLabel>
        </InputLabelContainer>
      </>
    );
  };
}

PasswordInput.propTypes = {
  error: PropTypes.string,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  onChange: PropTypes.func,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  title: PropTypes.string,
};

export default PasswordInput;

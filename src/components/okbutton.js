import React, { Component } from "react";
import styled, { css } from "styled-components";
import { KeyboardArrowRight } from "@styled-icons/material-rounded/KeyboardArrowRight";

// to be refactored, buttons should be the same, size height etc should not be replicated in both
const FilledButton = styled.button`
  background-color: #002b45;
  color: #ffffff;
  padding: 1rem 4vw;
  border-radius: 0.2rem;
  outline: 0;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class OkButton extends Component {
  render() {
    return (
      <>
        <FilledButton
          disabled={this.props.disabled}
          onClick={this.props.handleClick}
        >
          {this.props.title}
          <KeyboardArrowRight size={32}></KeyboardArrowRight>
        </FilledButton>
      </>
    );
  }
}

export default OkButton;

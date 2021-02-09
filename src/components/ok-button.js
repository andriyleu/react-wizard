import React, { Component } from "react";

import { KeyboardArrowRight } from "@styled-icons/material-rounded/KeyboardArrowRight";
import styled from "styled-components";

// to be refactored, buttons should be the same, size height etc should not be replicated in both
const FilledButton = styled.button`
  background-color: ${(props) => `${props.theme.colors.secondaryColor}`};
  color: ${(props) => `${props.theme.colors.white}`};
  padding: 1rem 4vw;
  border-radius: 0.2rem;
  outline: 0;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  &:disabled {
    background-color: ${(props) => `${props.theme.colors.grey}`};
  }
`;

class OkButton extends Component {
  render = () => {
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
  };
}

export default OkButton;

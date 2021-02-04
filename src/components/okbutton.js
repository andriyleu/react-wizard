import React, { Component } from "react";
import styled, { css } from "styled-components";
import { KeyboardArrowRight } from "@styled-icons/material-rounded/KeyboardArrowRight";


// to be refactored, buttons should be the same, size height etc should not be replicated in both
const FilledButton = styled.button`
    background-color: #002B45;
    color: #ffffff;
    padding: 1rem;
    width: 8rem;
    height: 4rem;
    border-radius: 0.3rem;
    outline: 0;
`;

class OkButton extends Component {
  render() {
    return (
      <>
        <FilledButton>
          {this.props.title}
          <KeyboardArrowRight size={32}></KeyboardArrowRight>
        </FilledButton>
      </>
    );
  }
}

export default OkButton;

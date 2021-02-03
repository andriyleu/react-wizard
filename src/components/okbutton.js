import React, { Component } from "react";
import styled, { css } from "styled-components";
import { KeyboardArrowRight } from "@styled-icons/material-rounded/KeyboardArrowRight";

const FilledButton = styled.button`
    background-color: #002B45;
    color: #ffffff;
    padding: 1rem;
`;

class OkButton extends Component {
  render() {
    return (
      <>
        <FilledButton>
          {this.props.title}
          <KeyboardArrowRight></KeyboardArrowRight>
        </FilledButton>
      </>
    );
  }
}

export default OkButton;

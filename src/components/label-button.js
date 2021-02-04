import React, { Component } from "react";
import styled, { css } from "styled-components";
import { KeyboardArrowRight } from "@styled-icons/material-rounded/KeyboardArrowRight";

const TextButton = styled.button`
  color: black;
  padding: 1rem;
  border: none;
  background-color: white;
  outline: 0;
  width: 8rem;
  height: 4rem;
`;

class LabelButton extends Component {
  render() {
    return (
      <>
        <TextButton>{this.props.title}</TextButton>
      </>
    );
  }
}

export default LabelButton;

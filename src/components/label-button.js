import React, { Component } from "react";
import styled, { css } from "styled-components";
import { KeyboardArrowRight } from "@styled-icons/material-rounded/KeyboardArrowRight";

const TextButton = styled.button`
  color: black;
  padding: 1rem;
  border: none;
  background-color: white;
  outline: 0;
  padding: 1rem 4vw;
  border-radius: 0.2rem;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
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

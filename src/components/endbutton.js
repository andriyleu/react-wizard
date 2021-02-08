import React, { Component } from "react";
import styled from "styled-components";
import { KeyboardArrowRight } from "@styled-icons/material-rounded/KeyboardArrowRight";

const TextButton = styled.button`
  color: #ff0049;
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

class EndButton extends Component {
  render = () => {
    return (
      <>
        <TextButton
          disabled={this.props.disabled}
          onClick={this.props.handleClick}
        >
          {this.props.title}
          <KeyboardArrowRight size={32}></KeyboardArrowRight>
        </TextButton>
      </>
    );
  };
}

export default EndButton;

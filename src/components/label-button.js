import React, { Component } from "react";

import styled from "styled-components";

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
  render = () => {
    return (
      <>
        <TextButton onClick={this.props.handleClick}>
          {this.props.title}
        </TextButton>
      </>
    );
  };
}

export default LabelButton;

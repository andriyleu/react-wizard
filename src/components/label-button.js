import React, { Component } from "react";

import styled from "styled-components";

const TextButton = styled.button`
  align-items: center;
  background-color: ${(props) => `${props.theme.colors.white}`};
  border-radius: 0.2rem;
  border: none;
  color: ${(props) => `${props.theme.colors.black}`};
  display: flex;
  font-size: 1rem;
  font-weight: bold;
  justify-content: center;
  outline: 0;
  padding: 1rem 4vw;
  padding: 1rem;
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

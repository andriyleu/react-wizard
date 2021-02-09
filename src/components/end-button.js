import React, { Component } from "react";

import { KeyboardArrowRight } from "@styled-icons/material-rounded/KeyboardArrowRight";
import PropTypes from "prop-types";
import styled from "styled-components";

const TextButton = styled.button`
  align-items: center;
  background-color: ${(props) => `${props.theme.colors.white}`};
  border-radius: 0.2rem;
  border: none;
  color: ${(props) => `${props.theme.colors.primaryColor}`};
  display: flex;
  font-size: 1rem;
  font-weight: bold;
  justify-content: center;
  outline: 0;
  padding: 1rem 4vw;
  padding: 1rem;
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

EndButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string,
};

export default EndButton;

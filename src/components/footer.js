import React, { Component } from "react";
import styled from "styled-components";

const BorderedFooter = styled.footer`
  border-top: 0.1rem solid #eaeaea;
  padding: 2rem 5vw;
  display: flex;
  justify-content: space-between;

  flex-direction: ${(props) => (props.isLastSlide ? "row-reverse" : "unset")};
`;

class Footer extends Component {
  render() {
    return (
      <BorderedFooter isLastSlide={this.props.isLastSlide}>
        {this.props.children}
      </BorderedFooter>
    );
  }
}

export default Footer;

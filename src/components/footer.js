import React, { Component } from "react";
import styled from "styled-components";

const BorderedFooter = styled.footer`
  border-top: 0.1rem solid #eaeaea;
  padding: 2rem 5vw;
  display: flex;
  justify-content: space-between;
`;

class Footer extends Component {
  render() {
    return <BorderedFooter>{this.props.children}</BorderedFooter>;
  }
}

export default Footer;

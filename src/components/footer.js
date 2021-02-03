import React, { Component } from "react";
import styled from "styled-components";

const BorderedFooter = styled.footer`
  border-top: 5px solid #eaeaea;
  padding-top: 2rem;
`;

class Footer extends Component {
  render() {
    return (<BorderedFooter>
        {this.props.children}
        </BorderedFooter>);
  }
}

export default Footer;

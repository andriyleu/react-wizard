import React, { Component } from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: #002b45;
  position: relative;
  margin: 0;

  &:after {
    content: "";
    background: #40c3df;
    position: absolute;
    height: 5px;
    width: 3rem;
    left: 0;
    top: 120%;
  }
`;

class PageTitle extends Component {
  render() {
    return (
      <>
        <Title>{this.props.title}</Title>
      </>
    );
  }
}

export default PageTitle;

import React, { Component } from "react";
import styled from "styled-components";

const Title = styled.h2`
  color: #002b45;
  border-bottom: 5px solid #40C3DF;
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

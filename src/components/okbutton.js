import React, { Component } from "react";
import styled, { css } from "styled-components";
import { KeyboardArrowRight } from "@styled-icons/material-rounded/KeyboardArrowRight";

class OkButton extends Component {
  render() {
    return (
      <>
        <button>
          {this.props.title}
          <KeyboardArrowRight></KeyboardArrowRight>
        </button>
      </>
    );
  }
}

export default OkButton;

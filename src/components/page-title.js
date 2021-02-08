import React, { Component } from "react";
import { TitleWithBorder } from "./styled/texts";

class PageTitle extends Component {
  render() {
    return (
      <>
        <TitleWithBorder>{this.props.title}</TitleWithBorder>
      </>
    );
  }
}

export default PageTitle;

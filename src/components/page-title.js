import React, { Component } from "react";

import PropTypes from "prop-types";
import { TitleWithBorder } from "./styled/texts";

class PageTitle extends Component {
  render = () => {
    return (
      <>
        <TitleWithBorder>{this.props.title}</TitleWithBorder>
      </>
    );
  };
}

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;

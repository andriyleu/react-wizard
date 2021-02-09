import React, { Component } from "react";

import { InfoCircle } from "@styled-icons/boxicons-regular/InfoCircle";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";

const InfoIconContainer = styled.div`
  display: inline-block;
  margin-left: 0.5rem;
`;

class InfoTooltip extends Component {
  render = () => {
    return (
      <>
        <InfoIconContainer>
          <InfoCircle
            data-tip
            data-for="optionalQuestionInfo"
            size={16}
          ></InfoCircle>
          <ReactTooltip id="optionalQuestionInfo">
            <span>{this.props.title}</span>
          </ReactTooltip>
        </InfoIconContainer>
      </>
    );
  };
}

InfoTooltip.propTypes = {
  title: PropTypes.string,
};

export default InfoTooltip;

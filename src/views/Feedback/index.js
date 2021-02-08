import React, { Component } from "react";

import Announcement from "../../components/announcement";
import { CheckmarkCircleOutline } from "@styled-icons/evaicons-outline/CheckmarkCircleOutline";
import { ErrorOutline } from "@styled-icons/material/ErrorOutline";
import styled from "styled-components";
import { submitForm } from "../../services/api";
import { withTranslation } from "react-i18next";

const Spinner = () => (
  <StyledSpinner viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="4"
    />
  </StyledSpinner>
);

const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8rem;
`;

const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  margin: -25px 0 0 -25px;
  width: 50px;
  height: 50px;

  & .path {
    stroke: #5652bf;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

class Step3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasLoaded: false,
      successful: false,
    };
  }

  componentDidMount = () => {
    const { pass, repass, optionalQuestion } = this.props.getUserInfo();
    submitForm(pass, repass, optionalQuestion)
      .then((res) => {
        this.setState({ successful: true, hasLoaded: true });
      })
      .catch((err) => {
        this.setState({ successful: false, hasLoaded: true });
      })
      .finally(() => {
        this.props.setUserInfo({
          isNavigationEnabled: true,
          success: this.state.successful,
        });
      });
  };

  render = () => {
    const { t } = this.props;

    return this.state.hasLoaded ? (
      this.state.successful ? (
        <Announcement
          icon={<CheckmarkCircleOutline size="64"></CheckmarkCircleOutline>}
          title={t("step_3.sucess.title")}
          description={t("step_3.sucess.desc")}
        ></Announcement>
      ) : (
        <Announcement
          icon={<ErrorOutline size="64"></ErrorOutline>}
          title={t("step_3.error.title")}
          description={t("step_3.error.desc")}
        ></Announcement>
      )
    ) : (
      <SpinnerWrapper>
        <Spinner></Spinner>
      </SpinnerWrapper>
    );
  };
}

export default withTranslation()(Step3);

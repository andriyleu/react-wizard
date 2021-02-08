import React, { Component } from "react";

import Announcement from "../../components/announcement";
import { CheckmarkCircleOutline } from "@styled-icons/evaicons-outline/CheckmarkCircleOutline";
import { ErrorOutline } from "@styled-icons/material/ErrorOutline";
import styled from "styled-components";

import { submitForm } from "../../services/api";

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
      response: {},
    };
  }

  componentDidMount = () => {
    submitForm().then((res) => {
      const succesfullyCreated = res.status !== 200;
      this.setState({ sucessful: succesfullyCreated, hasLoaded: true });
    });
  };

  render = () => {
    return this.state.hasLoaded ? (
      this.state.sucessful ? (
        <Announcement
          icon={<CheckmarkCircleOutline size="64"></CheckmarkCircleOutline>}
          title="¡Tu Password Manager ya está creado!"
          description="Tu contraseña ya está lista. Puedes acceder a tu cuenta."
        ></Announcement>
      ) : (
        <Announcement
          icon={<ErrorOutline size="64"></ErrorOutline>}
          title="Ha habido un error"
          description="No hemos podido modificar tu Contraseña Maestra. Inténtalo más tarde."
        ></Announcement>
      )
    ) : (
      <SpinnerWrapper>
        <Spinner></Spinner>
      </SpinnerWrapper>
    );
  };
}

export default Step3;

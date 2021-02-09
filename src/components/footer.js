import React, { Component } from "react";

import EndButton from "./endbutton";
import LabelButton from "./label-button";
import OkButton from "./okbutton";
import styled from "styled-components";
import { withTranslation } from "react-i18next";

const BorderedFooter = styled.footer`
  border-top: 0.1rem solid #eaeaea;
  padding: 2rem 5vw;
  display: flex;
  justify-content: space-between;

  flex-direction: ${(props) => (props.isLastSlide ? "row-reverse" : "unset")};
`;

class Footer extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.isNavigationEnabled !== nextProps.isNavigationEnabled ||
      this.props.currentStep !== nextProps.currentStep
    );
  }

  render = () => {
    const isLastSlide = this.props.currentStep === this.props.numberOfSteps - 1;
    const hasLoadedInfo = this.props.success !== undefined;
    const { t } = this.props;

    return (
      <BorderedFooter isLastSlide={isLastSlide}>
        {isLastSlide ? (
          hasLoadedInfo && (
            <EndButton
              handleClick={this.props.handleLastStepClick}
              disabled={!this.props.isNavigationEnabled}
              title={
                this.props.success
                  ? t("footer.login_button")
                  : t("footer.restart_button")
              }
            ></EndButton>
          )
        ) : (
          <>
            <LabelButton
              title={t("footer.cancel_button")}
              handleClick={this.props.handlePreviousClick}
            ></LabelButton>
            <OkButton
              handleClick={this.props.handleNextClick}
              disabled={!this.props.isNavigationEnabled}
              title={t("footer.continue_button")}
            ></OkButton>
          </>
        )}
      </BorderedFooter>
    );
  };
}

export default withTranslation()(Footer);

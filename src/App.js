import "./App.scss";

import React, { Component } from "react";

import EndButton from "./components/endbutton";
import Footer from "./components/footer";
import Header from "./components/header";
import LabelButton from "./components/label-button";
import OkButton from "./components/okbutton";
import Step1 from "./views/ProductInformation";
import Step2 from "./views/Form";
import Step3 from "./views/Feedback";
import styled from "styled-components";
import { withTranslation } from "react-i18next";

const PaddedSection = styled.section`
  padding-bottom: 4rem;
  padding-left: 8vw;
  padding-top: 2rem;
  padding-right: 8vw;
  box-shadow: 0px -0.2rem 2rem rgb(51 51 51 / 20%);
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentStep: 0, userInfo: {}, isNavigationDisabled: true };

    this.steps = [
      <Step1 setUserInfo={this.setUserInfo}></Step1>,
      <Step2 setUserInfo={this.setUserInfo}></Step2>,
      <Step3
        getUserInfo={this.getUserInfo}
        setUserInfo={this.setUserInfo}
      ></Step3>,
    ];
  }

  getCurrentStepComponent = () => {
    return this.steps[this.state.currentStep];
  };

  handleNextClick = () => {
    if (!this.isValidStep(true)) {
      return;
    }

    this.setState({
      currentStep: this.state.currentStep + 1,
      isNavigationEnabled: false,
    });
  };

  handlePreviousClick = () => {
    if (!this.isValidStep(false)) {
      return;
    }

    this.setState({ currentStep: this.state.currentStep - 1 });
  };

  isValidStep = (nextClicked) => {
    return nextClicked
      ? this.state.currentStep < this.steps.length - 1
      : this.state.currentStep > 0;
  };

  setUserInfo = (userInfo) => {
    this.setState({
      userInfo: userInfo.user,
      isNavigationEnabled: userInfo.isNavigationEnabled,
    });
  };

  getUserInfo = () => {
    return this.state.userInfo;
  };

  render = () => {
    const { t } = this.props;

    return (
      <div className="App">
        <main className="App-content">
          <Header
            currentStep={this.state.currentStep}
            numberOfSteps={this.steps.length}
          ></Header>
          <PaddedSection>{this.getCurrentStepComponent()}</PaddedSection>
          <Footer
            isLastSlide={this.state.currentStep === this.steps.length - 1}
          >
            {this.state.currentStep < this.steps.length - 1 ? (
              <>
                <LabelButton
                  title={t("footer.cancel_button")}
                  handleClick={this.handlePreviousClick}
                ></LabelButton>
                <OkButton
                  handleClick={this.handleNextClick}
                  disabled={!this.state.isNavigationEnabled}
                  title={t("footer.continue_button")}
                ></OkButton>
              </>
            ) : (
              <EndButton
                handleClick={this.handleNextClick}
                disabled={!this.state.isNavigationEnabled}
                title={t("footer.login_button")}
              ></EndButton>
            )}
          </Footer>
        </main>
      </div>
    );
  };
}

export default withTranslation()(App);

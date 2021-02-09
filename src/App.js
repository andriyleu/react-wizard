import React, { Component } from "react";

import Footer from "./components/footer";
import GlobalStyle from "./theme/globalStyle";
import Header from "./components/header";
import Step1 from "./views/ProductInformation";
import Step2 from "./views/Form";
import Step3 from "./views/Feedback";
import Theme from "./theme/theme";
import styled from "styled-components";

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
    this.state = { currentStep: 0, userInfo: {}, isNavigationEnabled: false };

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

  handleLastStepClick = () => {
    if (this.state.success) {
      return; // redirect to "login" or wherever
    }

    this.setState({ currentStep: 0, isNavigationEnabled: false });
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
      success: userInfo.success,
    });
  };

  getUserInfo = () => {
    return this.state.userInfo;
  };

  render = () => {
    return (
      <>
        <GlobalStyle />
        <Theme>
          <div className="App">
            <main className="App-content">
              <Header
                currentStep={this.state.currentStep}
                numberOfSteps={this.steps.length}
              ></Header>
              <PaddedSection>{this.getCurrentStepComponent()}</PaddedSection>
              <Footer
                currentStep={this.state.currentStep}
                numberOfSteps={this.steps.length}
                handleNextClick={this.handleNextClick}
                handlePreviousClick={this.handlePreviousClick}
                handleLastStepClick={this.handleLastStepClick}
                isNavigationEnabled={this.state.isNavigationEnabled}
                success={this.state.success}
              ></Footer>
            </main>
          </div>
        </Theme>
      </>
    );
  };
}

export default App;

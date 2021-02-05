import React, { Component } from "react";

import OpenbankLogo from "./assets/img/key_openbank.png";
import Step1 from "./views/ProductInformation";
import Step2 from "./views/Form";
import Step3 from "./views/Feedback";
import Footer from "./components/footer";
import OkButton from "./components/okbutton";
import Header from "./components/header";
import LabelButton from "./components/label-button";
import styled from "styled-components";

import "./App.scss";

const PaddedSection = styled.section`
  padding-bottom: 4rem;
  padding-left: 8vw;
  padding-top: 2rem;
  padding-right: 8vw;
  box-shadow: 0px -0.2rem 2rem rgb(51 51 51 / 20%);
`;

const steps = [<Step1></Step1>, <Step2></Step2>, <Step3></Step3>];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentStep: 1 };
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  getCurrentStepComponent() {
    return steps[this.state.currentStep - 1];
  }

  handleNextClick() {
    if (!this.isValidStep(true)) {
      return;
    }

    this.setState({ currentStep: this.state.currentStep + 1 });
  }

  handlePreviousClick() {
    if (!this.isValidStep(false)) {
      return;
    }

    this.setState({ currentStep: this.state.currentStep - 1 });
  }

  isValidStep(nextClicked) {
    return nextClicked
      ? this.state.currentStep + 1 < steps.length + 1
      : this.state.currentStep - 1 > 0;
  }

  render() {
    return (
      <div className="App">
        <main className="App-content">
          <Header
            currentStep={this.state.currentStep}
            numberOfSteps={steps.length}
          ></Header>
          <PaddedSection>{this.getCurrentStepComponent()}</PaddedSection>
          <Footer>
            <LabelButton
              title="Cancelar"
              handleClick={this.handlePreviousClick}
            ></LabelButton>
            <OkButton
              handleClick={this.handleNextClick}
              title="Siguiente"
            ></OkButton>
          </Footer>
        </main>
      </div>
    );
  }
}

export default App;

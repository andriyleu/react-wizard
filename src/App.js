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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentStep: 1 };
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  getCurrentStepComponent() {
    switch (this.state.currentStep) {
      case 1:
        return <Step1></Step1>;
      case 2:
        return <Step2></Step2>;
      case 3:
        return <Step3></Step3>;
    }
  }

  handleNextClick() {
    this.setState({ currentStep: this.state.currentStep + 1 });
  }

  handlePreviousClick() {
    this.setState({ currentStep: this.state.currentStep - 1 });
  }

  render() {
    return (
      <div className="App">
        <main className="App-content">
          <Header
            currentStep={this.state.currentStep}
            numberOfSteps={3}
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

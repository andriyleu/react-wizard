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
  render() {
    return (
      <div className="App">
        <main className="App-content">
          <Header currentStep={2} numberOfSteps={3}></Header>
          <PaddedSection>
            <Step2 />
          </PaddedSection>
          <Footer>
            <LabelButton title="Cancelar"></LabelButton>
            <OkButton title="Siguiente"></OkButton>
          </Footer>
        </main>
      </div>
    );
  }
}

export default App;

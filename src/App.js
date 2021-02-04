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
  padding: 4rem 8rem;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="App-content">
          <Header currentStep={2} numberOfSteps={3}></Header>
          <PaddedSection>
            <Step1 />
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

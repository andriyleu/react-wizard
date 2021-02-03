import React, { Component } from "react";

import OpenbankLogo from "./assets/img/key_openbank.png";
import Step1 from "./views/ProductInformation";
import Step2 from "./views/Form";
import Step3 from "./views/Feedback";
import Footer from "./components/footer";
import OkButton from "./components/okbutton";
import Header from "./components/header";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="App-content">
          <Header></Header>
          <Step1 />
          <Footer>
            <OkButton title="Siguiente"></OkButton>
          </Footer>
        </main>
      </div>
    );
  }
}

export default App;

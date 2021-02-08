import React, { Component } from "react";
import styled from "styled-components";
import PageTitle from "../../components/page-title";
import TextInput from "../../components/text-input";

import PasswordInput from "../../components/password-input";

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const InputLabel = styled.div`
  font-weight: bold;
  padding-bottom: 1rem;

  &:first-child {
    padding-right: 2rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-right: 0 !important;
  }
`;

const Section = styled.section`
  margin-top: 3rem;
`;

class Step2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isValidForm: false,
      pass: "",
      repass: "",
      optionalQuestion: "",
    };
    this.secondPasswordRef = React.createRef();
  }

  componentDidMount = () => {
    this.props.setNavigationDisabled(true);
  };

  setPass = (password, isValidPassword) => {
    this.setState(
      {
        pass: password,
        isValidForm: isValidPassword && password === this.state.repass, // checks if new input is valid and compares with the other password
      },
      () => {
        // this is needed to refresh html5 pattern validation in the 2nd input when 1st password (next  pattern) is updated
        this.secondPasswordRef.current.updateErrors();

        this.props.setNavigationDisabled(!this.state.isValidForm);

        this.updateUserInfo();
      }
    );
  };

  setRepass = (password, isValidPassword) => {
    this.setState(
      {
        repass: password,
        isValidForm: isValidPassword,
      },
      () => {
        this.props.setNavigationDisabled(!this.state.isValidForm);
        this.updateUserInfo();
      }
    );
  };

  updateUserInfo = () => {
    const userInfo = {
      pass: this.state.pass,
      repass: this.state.repass,
      optionalQuestion: this.state.optionalQuestion,
    };
    this.props.setUserInfo(userInfo);
  };

  onOptionalQuestionChange = (event) => {
    const optionalQuestion = event.target.value;
    this.setState({ optionalQuestion: optionalQuestion });
  };

  render = () => {
    return (
      <>
        <PageTitle title="Crea tu Password Manager"></PageTitle>
        <Section>
          <p>
            En primer lugar, debes crear una contraseña diferente para sus
            pertenencias electrónicas. No podrás recuperar tu contraseña, así
            que recuérdala bien.
          </p>
          <Form>
            <PasswordInput
              placeholder="Introduce tu contraseña"
              onChange={this.setPass}
              pattern="(?=.*\d)(?=.*[A-Z]).*"
              title="Crea tu Contraseña Maestra"
              error="La contraseña es invalida."
            ></PasswordInput>
            <PasswordInput
              ref={this.secondPasswordRef}
              placeholder="Repite tu contraseña"
              onChange={this.setRepass}
              pattern={this.state.pass}
              title="Repite tu Contraseña Maestra"
              error="La contraseña no coincide."
            ></PasswordInput>
          </Form>
          <p>
            También puedes crear una pista que te ayude a recordar tu contraseña
            maestra.
          </p>
          <InputLabel>
            Crea tu pista para recordar tu contraseña (opcional)
            <TextInput
              onChange={this.onOptionalQuestionChange}
              placeholder="Introduce tu pista"
              maxLength={255}
            ></TextInput>
          </InputLabel>
        </Section>
      </>
    );
  };
}

export default Step2;

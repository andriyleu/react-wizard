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

const ErrorLabel = styled.label`
  color: red;
  margin-top: 0.5rem;
`;

const Section = styled.section`
  margin-top: 3rem;
`;

class Step2 extends Component {
  render() {
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
            <InputLabel>
              Crea tu Contraseña Maestra
              <PasswordInput
                type="text"
                placeholder="Introduce tu contraseña"
                type="password"
              ></PasswordInput>
              <ErrorLabel>La contraseña no cumple los requisitos.</ErrorLabel>
            </InputLabel>
            <InputLabel>
              Repite tu Contraseña Maestra
              <PasswordInput
                type="text"
                placeholder="Repite tu contraseña"
                type="password"
              ></PasswordInput>
              <ErrorLabel>La contraseña no coincide.</ErrorLabel>
            </InputLabel>
          </Form>
          <p>
            También puedes crear una pista que te ayude a recordar tu contraseña
            maestra.
          </p>
          <InputLabel>
            Crea tu pista para recordar tu contraseña (opcional)
            <TextInput
              placeholder="Introduce tu pista"
              maxLength={10}
            ></TextInput>
          </InputLabel>
        </Section>
      </>
    );
  }
}

export default Step2;

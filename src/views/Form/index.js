import React, { Component } from "react";
import styled, { css } from "styled-components";
import PageTitle from "../../components/page-title";
import { BaseInput } from "../../components/styled/inputs";
import TextInput from "../../components/text-input";

import PasswordInput from "../../components/password-input";

const Form = styled.form`
  display: flex;
  justify-content: space-around;
`;

const InputLabel = styled.div`
  font-weight: bold;
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
            <div>
              <InputLabel>
                Crea tu Contraseña Maestra
                <PasswordInput
                  type="text"
                  placeholder="Introduce tu contraseña"
                  type="password"
                ></PasswordInput>
              </InputLabel>
            </div>
            <div>
              <InputLabel>
                Crear tu Contraseña Maestra
                <PasswordInput
                  type="text"
                  placeholder="Repite tu contraseña"
                  type="password"
                ></PasswordInput>
              </InputLabel>
            </div>
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

import React, { Component } from "react";
import brain from "../../assets/img/group.svg";
import safe from "../../assets/img/group-3.svg";
import styled, { css } from "styled-components";
import PageTitle from "../../components/page-title";
import ImageWithDescription from "../../components/imagewithdescription";

const ImagesSection = styled.section`
  display: flex;
  flex-direction: center;
  justify-content: space-around;
`;

class Step1 extends Component {
  render() {
    return (
      <>
        <PageTitle title="Crea tu Password Manager"></PageTitle>
        <ImagesSection>
          <ImageWithDescription
            image={brain}
            description="Guarda aqui todas tus contraseñas, datos o cualquier información, olvida las notas de papel y las aplicaciones no protegidas."
          ></ImageWithDescription>
          <ImageWithDescription
            image={safe}
            description="Crea tu clave maestra: solo tú podrás acceder o tus secretos con ella."
          ></ImageWithDescription>
        </ImagesSection>
        <div className="page_content">
          <div>
            <h4>Cómo funciona</h4>
            En primer lugar, debes crear una contraseña diferente para sus
            pertenencias electrónicos. No podrás recuperar tu contraseña, así
            que recuérdela bien.
          </div>
          <div>
            <h4>Qué datos puedes guardar</h4>
            Por ejemplo, el número de tu tarjeta, el PIN y el PLIK de tu
            teléfono móvil, el número de serie de alguno de tus dispositivos o
            cualquier información que necesites tener en lugar seguro.
          </div>
        </div>
      </>
    );
  }
}

export default Step1;

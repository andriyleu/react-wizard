import React, { Component } from "react";
import brain from "../../assets/img/group.svg";
import safe from "../../assets/img/group-3.svg";
import styled from "styled-components";
import PageTitle from "../../components/page-title";
import ImageWithDescription from "../../components/image-with-description";

const ImagesSection = styled.section`
  display: flex;
  flex-direction: center;
  justify-content: space-around;
  margin-top: 4rem;
  flex-wrap: wrap;
`;

const SubTitle = styled.h2`
  margin: 1rem 0;
`;

class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = { termsAccepted: false };
  }

  componentDidMount = () => {
    this.props.setNavigationDisabled(true);
  };

  handleCheckboxChange = (event) => {
    const isNavigationDisabled = !event.target.checked;
    this.setState({ termsAccepted: isNavigationDisabled });
    this.props.setNavigationDisabled(isNavigationDisabled);
  };

  render = () => {
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
        <section>
          <div>
            <SubTitle>Cómo funciona</SubTitle>
            <p>
              En primer lugar, debes crear una contraseña diferente para sus
              pertenencias electrónicos. No podrás recuperar tu contraseña, así
              que recuérdela bien.
            </p>
          </div>
          <div>
            <SubTitle>Qué datos puedes guardar</SubTitle>
            <p>
              Por ejemplo, el número de tu tarjeta, el PIN y el PLIK de tu
              teléfono móvil, el número de serie de alguno de tus dispositivos o
              cualquier información que necesites tener en lugar seguro.
            </p>
          </div>
          <input type="checkbox" onChange={this.handleCheckboxChange}></input>
          Tiene mayoría de edad y acepta que tratemos sus datos según la
          politica de protección de datos
        </section>
      </>
    );
  };
}

export default Step1;

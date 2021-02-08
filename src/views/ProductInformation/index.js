import React, { Component } from "react";

import ImageWithDescription from "../../components/image-with-description";
import PageTitle from "../../components/page-title";
import brain from "../../assets/img/group.svg";
import safe from "../../assets/img/group-3.svg";
import styled from "styled-components";
import { withTranslation } from "react-i18next";

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
  handleCheckboxChange = (event) => {
    const termsAccepted = event.target.checked;
    this.props.setUserInfo({ isNavigationEnabled: termsAccepted });
  };

  render = () => {
    const { t } = this.props;

    return (
      <>
        <PageTitle title={t("step_1.title")}></PageTitle>
        <ImagesSection>
          <ImageWithDescription
            image={brain}
            description={t("step_1.image_1_description")}
          ></ImageWithDescription>
          <ImageWithDescription
            image={safe}
            description={t("step_1.image_2_description")}
          ></ImageWithDescription>
        </ImagesSection>
        <section>
          <div>
            <SubTitle>{t("step_1.subheader_1")}</SubTitle>
            <p>{t("step_1.desc_1")}</p>
          </div>
          <div>
            <SubTitle>{t("step_1.subheader_2")}</SubTitle>
            <p>{t("step_1.desc_2")}</p>
          </div>
        </section>
        <input
          id="terms"
          type="checkbox"
          onChange={this.handleCheckboxChange}
        ></input>
        <label htmlFor="terms">{t("step_1.accept_terms")}</label>
      </>
    );
  };
}

export default withTranslation()(Step1);

import React, { Component } from "react";

import PageTitle from "../../components/page-title";
import PasswordInput from "../../components/password-input";
import TextInput from "../../components/text-input";
import styled from "styled-components";
import { withTranslation } from "react-i18next";

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const InputLabelContainer = styled.div`
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
  }

  setPass = (password, isValidPassword) => {
    this.setState(
      {
        pass: password,
        isValidForm: isValidPassword && password === this.state.repass, // checks if new input is valid and compares with the other password
      },
      () => {
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
        this.updateUserInfo();
      }
    );
  };

  updateUserInfo = () => {
    const userInfo = {
      isNavigationEnabled: this.state.isValidForm,
      user: {
        pass: this.state.pass,
        repass: this.state.repass,
        optionalQuestion: this.state.optionalQuestion,
      },
    };
    this.props.setUserInfo(userInfo);
  };

  onOptionalQuestionChange = (event) => {
    const optionalQuestion = event.target.value;
    this.setState({ optionalQuestion: optionalQuestion });
  };

  render = () => {
    const { t } = this.props;

    return (
      <>
        <PageTitle title={t("step_2.title")}></PageTitle>
        <Section>
          <p>{t("step_2.desc_1")}</p>
          <Form>
            <PasswordInput
              placeholder={t("step_2.input_1_placeholder")}
              onChange={this.setPass}
              pattern="(?=.*\d)(?=.*[A-Z]).*"
              title={t("step_2.input_1_label")}
              error={t("step_2.input_1_invalid")}
            ></PasswordInput>
            <PasswordInput
              placeholder={t("step_2.input_2_placeholder")}
              onChange={this.setRepass}
              pattern={this.state.pass}
              title={t("step_2.input_2_label")}
              error={t("step_2.input_2_invalid")}
            ></PasswordInput>
          </Form>
          <p>{t("step_2.desc_2")}</p>
          <InputLabelContainer>
            <label>
              {t("step_2.input_3_label")}
              <TextInput
                onChange={this.onOptionalQuestionChange}
                placeholder={t("step_2.input_3_placeholder")}
                maxLength={255}
              ></TextInput>
            </label>
          </InputLabelContainer>
        </Section>
      </>
    );
  };
}

export default withTranslation()(Step2);

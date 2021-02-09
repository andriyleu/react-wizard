import React, { Component } from "react";

import { Check2 } from "@styled-icons/bootstrap/Check2";
import PropTypes from "prop-types";
import styled from "styled-components";

const AppHeader = styled.header`
  background-color: #b7c4c9;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: center;
`;

const AppNav = styled.nav`
  text-align: center;
`;

const NavList = styled.ul`
  position: relative;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CircleNavElement = styled.li`
  width: ${(props) => (props.isActive ? "2.5rem" : "2rem")};
  height: ${(props) => (props.isActive ? "2.5rem" : "2rem")};
  line-height: 2em;
  border-radius: 3em;
  margin: 0 1em;
  color: white;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: -2em;
    width: 2em;
    height: 0.2em;
    background: ${(props) =>
      props.isPending
        ? props.theme.colors.grey
        : props.theme.colors.primaryColor};
  }

  &:first-child:before {
    display: none;
  }

  &:after {
    width: 1rem;
    height: 1rem;
    background-color: ${(props) => `${props.theme.colors.white}`};
    content: "";
    position: absolute;
    top: 4rem;
    transform: rotate(45deg);
    box-shadow: -1px -1px rgb(51 51 51 / 20%);
    display: ${(props) => (props.isActive ? "block" : "none")};
  }

  ${(props) => {
    switch (true) {
      case props.isActive:
        return `background-color :  ${props.theme.colors.secondaryColor}`;
      case props.isPending:
        return `background-color : ${props.theme.colors.grey}`;
      default:
        return `background-color : ${props.theme.colors.primaryColor}`;
    }
  }}
`;

class Header extends Component {
  render = () => {
    const circleElements = Array.from(
      { length: this.props.numberOfSteps },
      (_, i) => i
    ).map((i) => {
      return (
        <CircleNavElement
          isActive={this.props.currentStep === i}
          isPending={i > this.props.currentStep}
          key={i}
        >
          {this.props.currentStep > i ? <Check2 size={24}></Check2> : i + 1}
        </CircleNavElement>
      );
    });

    return (
      <>
        <AppHeader>
          <AppNav>
            <NavList>{circleElements}</NavList>
          </AppNav>
        </AppHeader>
      </>
    );
  };
}

Header.propTypes = {
  currentStep: PropTypes.number,
  numberOfSteps: PropTypes.number,
};

export default Header;

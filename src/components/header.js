import React, { Component } from "react";
import styled from "styled-components";
import { Check2 } from "@styled-icons/bootstrap/Check2";

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
  text-align: center;
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
    background: ${(props) => (props.isPending ? "#788f9c" : "#FF0049")};
  }

  &:first-child:before {
    display: none;
  }

  &:after {
    width: 1rem;
    height: 1rem;
    background-color: #ffffff;
    content: "";
    position: absolute;
    top: 4rem;
    transform: rotate(45deg);
    box-shadow: -1px -1px rgb(51 51 51 / 20%);
    display: ${(props) => (props.isActive ? "block" : "none")};
  }

  ${({ isPending, isActive }) => {
    switch (true) {
      case isActive:
        return `background-color : #002B45`;
      case isPending:
        return `background-color : #788f9c`;
      default:
        return `background-color : #FF0049`;
    }
  }}
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { currentStep: 0 };
  }

  render() {
    const circleElements = Array.from(
      { length: this.props.numberOfSteps },
      (_, i) => i + 1
    ).map((i) => {
      return (
        <CircleNavElement
          isActive={this.props.currentStep === i}
          isPending={i > this.props.currentStep}
        >
          {this.props.currentStep > i ? <Check2 size={24}></Check2> : i}
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
  }
}

export default Header;

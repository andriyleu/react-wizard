import React, { Component } from "react";
import styled from "styled-components";

const AppHeader = styled.header`
  background-color: #b7c4c9;
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
`;

const AppNav = styled.nav`
  width: 20rem;
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
  width: ${(props) => (props.isActive ? "3em" : "2em")};
  height: ${(props) => (props.isActive ? "3em" : "2em")};
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
      console.log("currentstep", this.props.currentStep);
      console.log("i", i);
      return (
        <CircleNavElement
          isActive={this.props.currentStep === i}
          isPending={i > this.props.currentStep}
        >
          {i}
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

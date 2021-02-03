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
`;

const CircleNavElement = styled.li`
  width: 2em;
  height: 2em;
  text-align: center;
  line-height: 2em;
  border-radius: 1em;
  background: #002B45;
  margin: 0 1em;
  display: inline-block;
  color: white;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0.9em;
    left: -2em;
    width: 2em;
    height: 0.2em;
    background: #788F9C;
  }

  &:first-child:before {
    display: none;
  }
`;

class Header extends Component {
  render() {
    return (
      <>
        <AppHeader>
          <AppNav>
            <NavList>
              <CircleNavElement>1</CircleNavElement>
              <CircleNavElement>2</CircleNavElement>
              <CircleNavElement>3</CircleNavElement>
            </NavList>
          </AppNav>
        </AppHeader>
      </>
    );
  }
}

export default Header;

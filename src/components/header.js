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
`;

const NavList = styled.ul`  
  position: relative;
  display: flex;
  padding; 0;
  justify-content: space-between;
  border-top: 5px solid #002B45;
  padding: 0;
`;

const CircleNavElement = styled.li`
  list-style-type: none;
  background-color: #002b45;
  font-weight: bold;
  border: 2px solid black;
  margin-top: -27.5px;
  width: 45px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  border-radius: 50%;
  color: #ffffff;
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

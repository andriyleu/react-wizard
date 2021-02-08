import styled from "styled-components";

export const Title = styled.h1`
  color: #002b45;
  position: relative;
  margin: 0;
`;

export const TitleWithBorder = styled(Title)`
  &:after {
    content: "";
    background: #40c3df;
    position: absolute;
    height: 5px;
    width: 3rem;
    left: 0;
    top: 120%;
  }
`;

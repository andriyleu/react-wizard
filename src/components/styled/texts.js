import styled from "styled-components";

export const Title = styled.h1`
  color: ${(props) => `${props.theme.colors.secondaryColor}`};
  position: relative;
  margin: 0;
`;

export const TitleWithBorder = styled(Title)`
  &:after {
    content: "";
    background: ${(props) => `${props.theme.colors.blue}`};
    position: absolute;
    height: 5px;
    width: 3rem;
    left: 0;
    top: 120%;
  }
`;

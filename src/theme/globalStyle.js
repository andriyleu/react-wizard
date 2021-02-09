import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
button {
  font-family: inherit;
  font-size: 1em;
}

input {
  font-family: inherit;
  font-size: 1em;
}

#root {
  height: 100vh;
  overflow: auto;
  background: linear-gradient(180deg, #ccd5da 6rem, #f5f5f5 6rem);
}

.App {
  padding: 2rem 5vw;

  &-content {
    background-color: white;
  }
}
`;

export default GlobalStyle;

import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Prompt:wght@100;500&display=swap");

  body {
   font-family: 'Prompt', sans-serif;
  }
`;

export const Text = styled.span<{ fontSize: number }>`
  @import url("https://fonts.googleapis.com/css2?family=Prompt:wght@100;500&display=swap");
  font-size: ${({ fontSize }) => `${fontSize}px`};
  color: white;
  overflow: hidden;
  font-family: "Prompt", sans-serif;
`;

import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }
`

export const colors = {
  primary: "#586875",
  secondary: "#A5C8CA",
  third: "#10898B",
  quarternary: "#E2D9C2",
  black: "black",
  white: "white",
}
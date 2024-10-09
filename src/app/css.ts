import  { css } from "styled-components";

export const defaultTransition = css`
  transition: all 0.2s ease-in-out;
`;

export const defaultLoading = css`
  @keyframes loading {
    0% {
      background-position: -200px 0;
    }
    100% {
      background-position: calc(200px + 100%) 0;
    }
}
`

export const defaultAnimation = css`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 37%, #f0f0f0 63%);
  animation: loading 2.5s ease infinite;;
`;
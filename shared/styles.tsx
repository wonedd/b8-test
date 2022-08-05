import { css, Global } from "@emotion/react";

export const media = {
  maxMobile: "@media(max-width:800px)",
  minlaptop: "@media(min-width: 800px)",
};

export const globalStyles = (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
      }

      @media (max-width: 1080px) {
        html {
          font-size: 93.75%;
        }
      }
      @media (max-width: 720px) {
        html {
          font-size: 87.5%;
        }
      }

      body {
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        overflow-x: hidden;
      }

      body,
      input,
      button {
        font-size: 14px;
        font-family: "Inter", sans-serif;
      }
      body::-webkit-scrollbar {
        width: 4px;
      }

      body::-webkit-scrollbar-track {
        background: var(--gray900);
      }

      body::-webkit-scrollbar-thumb {
        background-color: var(--gray900);
        border-radius: 20px;
      }
      :root {
        --primaryWhite: #ffffff;

        --pink100: #ffcae0;

        --red500: #f3151b;

        --red600: #e20f15;

        --gray200: #e9ebee;

        --gray600: #999a9b;

        --gray700: #737375;

        --gray900: #1c1c1c;

        --green100: #a3f9b9;

        --green400: #40b25c;

        --green600: #1e9631;
      }
    `}
  />
);

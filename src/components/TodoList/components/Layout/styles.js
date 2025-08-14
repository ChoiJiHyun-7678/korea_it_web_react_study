import { css } from "@emotion/react";

export const layout = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color:rgb(0, 174, 255);
`;

export const container = css`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 600px;
  border: 9px solid rgb(0, 46, 114);
  box-sizing: border-box;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
`;

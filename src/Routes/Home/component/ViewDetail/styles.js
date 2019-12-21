import { css } from 'emotion'

export const main = css `
  font-family: sans-serif;
  text-align: center;
  font-size: 22px;
  display: flex;

  & img {
    margin-bottom: 20px;
    border-radius: 10px;
    width: 200px;
    height: auto;
  }
  & strong {
    display: block;
    font-size: 14px;
    opacity: 0.4;
    margin-bottom: 6px;
  }
`;

export const right = css`
  flex:1;
`;

export const left = css`
  flex:1;
  text-align: left;
  padding-left:10px;
`;
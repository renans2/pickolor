import styled, { css } from "styled-components";

export const S_RgbInput = styled.input`
  width: 50px;
`;

export const S_HslInput = styled.input`
  width: 50px;
`;

export const S_HexInput = styled.input<{ $invalid: boolean }>`
  width: 100px;
  
  ${({ $invalid }) => $invalid && css`
    outline: 2px solid red !important;
  `}
`;

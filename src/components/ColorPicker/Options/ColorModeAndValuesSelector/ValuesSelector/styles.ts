import styled from "styled-components";

export const S_RgbInput = styled.input.attrs({
  type: "number",
  min: 0,
  max: 255,
})`
  /* width: 50px; */
`;

export const S_HsvInput = styled.input.attrs({
  type: "number",
  min: 0,
})`
  width: 50px;
`;

export const S_HexInput = styled.input`
  width: 100px;
`;

export const S_Error = styled.span`
  color: ${({ theme }) => theme.colors.textError};
`;
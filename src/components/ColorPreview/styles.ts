import type { Color } from "chroma-js";
import styled from "styled-components";

export const S_ColorPreview = styled.div.attrs<{ 
  $color: Color 
}>((props) => ({
  style: {
    backgroundColor: props.$color.css(),
  }
}))`
  border: ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.shadow.surface};
  border-radius: ${({ theme }) => theme.rounded.sm};

  position: relative;
  width: 100%;
  height: 100%;
  grid-area: preview;
`;

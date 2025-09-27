import type { Color } from "chroma-js";
import styled from "styled-components";
import { S_MainSurface } from "../../base/MainSurface";

export const S_ColorPreview = styled(S_MainSurface).attrs<{ 
  $color: Color 
}>((props) => ({
  style: {
    backgroundColor: props.$color.css(),
  }
}))`
  position: relative;
  width: 100%;
  height: 100%;
  grid-area: preview;
`;

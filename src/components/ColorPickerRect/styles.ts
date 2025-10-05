import styled from "styled-components";
import type { Color } from "chroma-js";
import { S_MainSurface } from "../../base/MainSurface";

export const S_ColorPickerRect = styled(S_MainSurface).attrs<{
  $hue: number;
  $isDragging: boolean;
}>((props) => ({
  style: { 
    backgroundColor: `hsl(${props.$hue}, 100%, 50%)`,
    cursor: props.$isDragging ? "grabbing" : "grab",
  }
}))`
  grid-area: pickerRect;
  width: 100%;
  height: 100%;
  border: none;
  position: relative;

  &::before, &::after {
    content: "";
    border-radius: ${({ theme }) => theme.rounded.sm};
    position: absolute;
    inset: 0;
  }

  &::before {
    background: linear-gradient(to right, white, transparent);
  }

  &::after {
    background: linear-gradient(to top, black, transparent);
  }
`;

export const S_ColorPin = styled.div.attrs<{
  $left: number;
  $top: number;
  $color: Color;
}>((props) => ({
  style: {
    left: `${props.$left}px`,
    top: `${props.$top}px`,
    backgroundColor: props.$color.css(),
  }
}))`
  position: absolute;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 3px solid white;
  z-index: 1;
  background-color: black;
  box-shadow: 0 0 3px rgba(0,0,0,0.8);
  pointer-events: none;
`;
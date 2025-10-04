import styled from "styled-components";
import { COLOR_PICKER_RECT_HEIGHT } from "../../../constants/dimensions";
import type { Color } from "chroma-js";

export const S_ColorPickerRect = styled.div.attrs<{
  $hue: number
}>(({ $hue }) => ({
  style: { backgroundColor: `hsl(${$hue}, 100%, 50%)` }
}))`
  width: 100%;
  height: ${COLOR_PICKER_RECT_HEIGHT}px;
  border-radius: ${({ theme }) => `${theme.rounded.sm} ${theme.rounded.sm} 0 0`};
  position: relative;

  &::before {
    content: "";
    border-radius: ${({ theme }) => `${theme.rounded.sm} ${theme.rounded.sm} 0 0`};
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, white, transparent);
  }

  &::after {
    content: "";
    border-radius: ${({ theme }) => `${theme.rounded.sm} ${theme.rounded.sm} 0 0`};
    position: absolute;
    inset: 0;
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
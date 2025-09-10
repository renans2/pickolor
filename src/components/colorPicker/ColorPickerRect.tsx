import styled from "styled-components";
import { useSelectedColor } from "../../context/SelectedColorProvider";
import { useEffect, useRef, useState } from "react";
import { COLOR_PICKER_RECT_HEIGHT, COLOR_PICKER_RECT_WIDTH } from "../../constants/dimensions";
import chroma, { type Color } from "chroma-js";

export default function ColorPickerRect() {
  const { 
    pinPosition: { left, top },
    color,
    setColor,
    hue,
  } = useSelectedColor();
  const [isDragging, setIsDragging] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  const updatePinPosition = (clientX: number, clientY: number) => {
    if (!divRef.current) return;

    const div = divRef.current.getBoundingClientRect();
    let left = clientX - div.left;
    let top = clientY - div.top;

    left = Math.max(0, Math.min(left, div.width));
    top = Math.max(0, Math.min(top, div.height));

    const saturation = (left / div.width);
    const value = (1 - (top / div.height));

    const newColor = chroma.hsv(hue, saturation, value);
    setColor(newColor);
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    updatePinPosition(e.clientX, e.clientY);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    updatePinPosition(e.clientX, e.clientY);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        updatePinPosition(e.clientX, e.clientY);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <S_ColorPickerRect 
      ref={divRef}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      $hue={hue}
    >
      <S_ColorPin 
        $left={left}
        $top={top}
        $color={color}
      />
    </S_ColorPickerRect>
  );
}

const S_ColorPickerRect = styled.div.attrs<{
  $hue: number
}>(({ $hue }) => ({
  style: { backgroundColor: `hsl(${$hue}, 100%, 50%)` }
}))`
  width: ${COLOR_PICKER_RECT_WIDTH}px;
  height: ${COLOR_PICKER_RECT_HEIGHT}px;
  border-radius: ${({ theme }) => `${theme.rounded.xl} ${theme.rounded.xl} 0 0`};
  position: relative;

  &::before {
    content: "";
    border-radius: ${({ theme }) => `${theme.rounded.xl} ${theme.rounded.xl} 0 0`};
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, white, transparent);
  }

  &::after {
    content: "";
    border-radius: ${({ theme }) => `${theme.rounded.xl} ${theme.rounded.xl} 0 0`};
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, black, transparent);
  }
`;

const S_ColorPin = styled.div.attrs<{
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

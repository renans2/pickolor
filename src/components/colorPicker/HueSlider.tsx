import styled from "styled-components";
import { useSelectedColor } from "../../context/SelectedColorProvider";
import type React from "react";

export default function HueSlider() {
  const { hue, color, setColor } = useSelectedColor();

  const handleHueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = color.set("hsl.h", parseInt(e.target.value));
    setColor(newColor);
  }

  return (
    <S_HueSlider 
      id="hueSlider"
      type="range"
      min={0}
      max={359}
      value={hue}
      onChange={handleHueChange}
    />
  );
}

const S_HueSlider = styled.input`
  width: 100%;
  appearance: none;

  &::-webkit-slider-runnable-track {
    box-shadow: ${({ theme }) => theme.shadow.detail};
    height: 10px;
    border-radius: 100px;
    background: linear-gradient(
      to right, 
      hsl(0, 100%, 50%), 
      hsl(60, 100%, 50%), 
      hsl(120, 100%, 50%), 
      hsl(180, 100%, 50%), 
      hsl(240, 100%, 50%), 
      hsl(300, 100%, 50%), 
      hsl(360, 100%, 50%)
    );
  }

  &::-webkit-slider-thumb {
    background-color: rgba(255, 255, 255, .75);
    backdrop-filter: blur(3px);
    box-shadow: ${({ theme }) => theme.shadow.detail};
    border: ${({ theme }) => theme.border};

    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    margin-top: -10px
  }
`;
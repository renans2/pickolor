import styled from "styled-components";

export default function HueSlider() {
  return (
    <S_HueSlider 
      id="hueSlider"
      type="range"
      min={0}
      max={360}
    />
  );
}

const S_HueSlider = styled.input`
  width: 100%;
  appearance: none;

  &::-webkit-slider-runnable-track {
    height: 10px;
    border-radius: 3px;
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
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background-color: white;
    border: 1px solid gray;
    margin-top: -10px
  }
`;
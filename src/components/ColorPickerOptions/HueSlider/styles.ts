import styled from "styled-components";

export const S_HueSlider = styled.input`
  width: 100%;
  appearance: none;
  cursor: grab;
  background: transparent;

  &:active {
    cursor: grabbing;
  }

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
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background-color: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(3px);
    box-shadow: ${({ theme }) => theme.shadow.detail};
    border: ${({ theme }) => theme.border};
    margin-top: -10px;
  }

  &::-moz-range-track {
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

  &::-moz-range-thumb {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background-color: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(3px);
    box-shadow: ${({ theme }) => theme.shadow.detail};
    border: ${({ theme }) => theme.border};
  }

  &::-moz-focus-outer {
    border: 0;
  }
`;

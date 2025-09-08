import styled from "styled-components";
import HueSlider from "./HueSlider";
import ColorModeAndValuesSelector from "./ColorModeAndValuesSelector";

export default function ColorPickerOptions() {
  return (
    <S_ColorPickerOptionsContainer>
      <HueSlider />
      <ColorModeAndValuesSelector />
    </S_ColorPickerOptionsContainer>
  );
}

const S_ColorPickerOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px;
  gap: 20px;
`;
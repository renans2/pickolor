import styled from "styled-components";
import HueSlider from "./HueSlider";

export default function ColorPickerOptions() {
  return (
    <S_ColorPickerOptionsContainer>
      <HueSlider />
      <span>321</span>
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
import styled from "styled-components";
import ColorPickerOptions from "./ColorPickerOptions";
import ColorPickerRect from "./ColorPickerRect";

export default function ColorPicker() {
  return (
    <S_ColorPickerContainer>
      <ColorPickerRect />
      <ColorPickerOptions />
    </S_ColorPickerContainer>
  );
}

const S_ColorPickerContainer = styled.div`
  border-radius: 20px;
  border: 1px solid gray;
`;
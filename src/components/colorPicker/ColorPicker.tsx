import styled from "styled-components";
import ColorPickerOptions from "./ColorPickerOptions";
import ColorPickerRect from "./ColorPickerRect";

export default function ColorPicker() {
  return (
    <S_Container>
      <ColorPickerRect />
      <ColorPickerOptions />
    </S_Container>
  );
}

const S_Container = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border: ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.shadow.surface};
  border-radius: ${({ theme }) => theme.rounded.xl};

  grid-area: picker;
`;
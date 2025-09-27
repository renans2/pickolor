import ColorPickerOptions from "./Options";
import ColorPickerRect from "./Rect";
import { S_Container } from "./styles";

export default function ColorPicker() {
  return (
    <S_Container>
      <ColorPickerRect />
      <ColorPickerOptions />
    </S_Container>
  );
}

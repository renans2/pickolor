import HueSlider from "./HueSlider";
import ColorModeAndValuesSelector from "./ColorModeAndValuesSelector";
import { S_ColorPickerOptionsContainer } from "./styles";

export default function ColorPickerOptions() {
  return (
    <S_ColorPickerOptionsContainer>
      <HueSlider />
      <ColorModeAndValuesSelector />
    </S_ColorPickerOptionsContainer>
  );
}

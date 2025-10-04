import { useColorPicker } from "../../context/ColorPickerProvider";
import { S_ColorPreview } from "./styles";

export default function ColorPreview() {
  const { color } = useColorPicker();

  return (
    <S_ColorPreview 
      $color={color}
    />
  );
}

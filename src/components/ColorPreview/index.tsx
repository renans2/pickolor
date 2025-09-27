import { useSelectedColor } from "../../context/SelectedColorProvider";
import { S_ColorPreview } from "./styles";

export default function ColorPreview() {
  const { color } = useSelectedColor();

  return (
    <S_ColorPreview 
      $color={color}
    />
  );
}

import styled from "styled-components";
import { useSelectedColor } from "../../context/SelectedColorProvider";
import type { Color } from "chroma-js";
import { COLOR_PICKER_RECT_HEIGHT } from "../../constants/dimensions";

export default function ColorPreview() {
  const { color } = useSelectedColor();

  return (
    <S_ColorPreview
      $color={color}
    />
  );
}

const S_ColorPreview = styled.div.attrs<{ 
  $color: Color 
}>((props) => ({
  style: {
    backgroundColor: props.$color.css(),
  }
}))`
  width: 300px;
  height: ${COLOR_PICKER_RECT_HEIGHT}px;
  grid-area: preview;
`;
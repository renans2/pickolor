import styled from "styled-components";
import { useSelectedColor } from "../../context/SelectedColorProvider";
import type { Color } from "chroma-js";

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
  border: ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.shadow.surface};
  border-radius: ${({ theme }) => theme.rounded.sm};

  position: relative;
  width: 100%;
  height: 100%;
  grid-area: preview;
`;

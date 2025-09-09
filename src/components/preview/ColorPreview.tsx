import styled from "styled-components";
import { useSelectedColor } from "../../context/SelectedColorProvider";
import type { Color } from "chroma-js";
import { COLOR_PICKER_RECT_HEIGHT } from "../../constants/dimensions";
import { useState } from "react";

export default function ColorPreview() {
  const { color } = useSelectedColor();
  const [savedColors, setSavedColors] = useState<Color[]>([]);

  const handleSaveNewColor = () => {
    setSavedColors(prev => {
      const copy = [...prev];
      copy.unshift(color);
      return copy;
    });
  }

  const handleRemoveSavedColor = (index: number) => {
    setSavedColors(prev => prev.filter((_, i) => i !== index));
  }

  return (
    <S_ColorPreview
      $color={color}
    >
      <button
        onClick={handleSaveNewColor}
      >
        save color!
      </button>

      <S_SavedColors>
        {savedColors.map((color, i) => (
          <S_SavedColor 
            key={savedColors.length - i - 1} 
            $color={color}
            onClick={() => handleRemoveSavedColor(i)}
          />
        ))}
      </S_SavedColors>
    </S_ColorPreview>
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

const S_SavedColors = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  gap: 1px;
  left: 101%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

const S_SavedColor = styled.li.attrs<{
  $color: Color;
}>((props) => ({
  style: {
    backgroundColor: props.$color.css(),
  }
}))`
  width: 65px;
  height: 30px;
  border-radius: 7px;
  list-style: none;
  flex-shrink: 0;
  transition: height linear 200ms;

  &:hover {
    height: 50px;
  }
`;
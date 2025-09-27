import { useSelectedColor } from "../../context/SelectedColorProvider";
import { useState } from "react";
import type { Color } from "chroma-js";
import { S_Container, S_SaveButton, S_SavedColorItem, S_SavedColorOptions, S_SavedColorPreview, S_SavedColorsList } from "./styles";

export default function SavedColors() {
  const { color, setColor } = useSelectedColor();
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

  const handleSetAsCurrentColor = (color: Color) => {
    setColor(color);
  }

  return (
    <S_Container>
      <S_SaveButton
        onClick={handleSaveNewColor}
      >
        Save color!
      </S_SaveButton>

      <S_SavedColorsList>
        {savedColors.map((color, i) => (
          <S_SavedColorItem 
            key={savedColors.length - i - 1} 
          >
            <S_SavedColorOptions>
              <button onClick={() => handleRemoveSavedColor(i)}>Del</button>
              <button onClick={() => handleSetAsCurrentColor(color)}>See</button>
            </S_SavedColorOptions>
            <S_SavedColorPreview $color={color} />
          </S_SavedColorItem>
        ))}
      </S_SavedColorsList>
    </S_Container>
  );
}

import { useSelectedColor } from "../../context/SelectedColorProvider";
import { useState } from "react";
import type { Color } from "chroma-js";
import { S_Container, S_OptionsButton, S_SaveButton, S_SavedColorItem, S_SavedColorOptions, S_SavedColorsList, S_SmallColorPreview } from "./styles";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { useTheme } from "styled-components";

export default function SavedColors() {
  const { color, setColor } = useSelectedColor();
  const [savedColors, setSavedColors] = useState<Color[]>([]);
  const { colors: { textPrimary } } = useTheme();

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
      <S_SaveButton onClick={handleSaveNewColor}>
        <span>Save color</span>
        <S_SmallColorPreview $color={color} />
      </S_SaveButton>

      <S_SavedColorsList>
        {savedColors.map((color, i) => (
          <S_SavedColorItem 
            key={savedColors.length - i - 1} 
          >
            <S_SavedColorOptions>
              <S_OptionsButton title="Delete" onClick={() => handleRemoveSavedColor(i)}>
                <Trash2 size={18} strokeWidth={2} color={textPrimary} />
              </S_OptionsButton>

              <S_OptionsButton title="Set as current color" onClick={() => handleSetAsCurrentColor(color)}>
                <Eye size={18} strokeWidth={2} color={textPrimary} />
              </S_OptionsButton>
              
              <S_OptionsButton title="Edit" onClick={() => handleSetAsCurrentColor(color)}>
                <Pencil size={18} strokeWidth={2} color={textPrimary} />
              </S_OptionsButton>
            </S_SavedColorOptions>

            <S_SmallColorPreview 
              $color={color}
            />
          </S_SavedColorItem>
        ))}
      </S_SavedColorsList>
    </S_Container>
  );
}

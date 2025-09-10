import styled from "styled-components";
import { useSelectedColor } from "../../context/SelectedColorProvider";
import { useState } from "react";
import type { Color } from "chroma-js";

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
          <S_SavedColor 
            key={savedColors.length - i - 1} 
            $color={color}
          >
            <button onClick={() => handleRemoveSavedColor(i)}>Del</button>
            <button onClick={() => handleSetAsCurrentColor(color)}>See</button>
          </S_SavedColor>
        ))}
      </S_SavedColorsList>
    </S_Container>
  );
}

const S_Container = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border: ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.shadow.surface};
  border-radius: ${({ theme }) => theme.rounded.xl};

  padding: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  grid-area: savedColors;
`;

const S_SaveButton = styled.button`
  border: ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.rounded.sm};
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadow.detailSmall};
  padding: 7px 7px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 600;

  &:active {
    box-shadow: none;
    transform: translateY(3px);
  }
`;

const S_SavedColorsList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 4px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, .3);
  }
`;

const S_SavedColor = styled.li<{
  $color: Color;
}>`
  border-radius: ${({ theme }) => theme.rounded.xs};
  background: ${({ $color }) => `linear-gradient(to right, transparent 40%, ${$color} 90%, ${$color})`};
  display: flex;
  gap: 5px;
  align-items: center;
  min-height: 30px;
  list-style: none;
`;

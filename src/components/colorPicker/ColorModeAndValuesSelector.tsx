import { useState } from "react";
import styled from "styled-components";
import type { ColorMode } from "../../types/ColorMode";
import { HexSelector, HsvSelector, RgbSelector } from "./ValuesSelectors";

export default function ColorModeAndValuesSelector() {
  const [colorMode, setColorMode] = useState<ColorMode>("RGB");
  
  return (
    <S_Container>
      <S_Select 
        id="colorMode" 
        value={colorMode}
        onChange={(e) => setColorMode(e.target.value as ColorMode)}
      >
        <option value="RGB">RGB</option>
        <option value="HSV">HSV</option>
        <option value="HEX">HEX</option>
      </S_Select>

      <S_ValuesSelectorContainer>
        {colorMode === "RGB" && <RgbSelector />}
        {colorMode === "HSV" && <HsvSelector />}
        {colorMode === "HEX" && <HexSelector />}
      </S_ValuesSelectorContainer>
    </S_Container>
  );
}

const S_Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const S_Select = styled.select`
  border: ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.rounded.sm};
  color: ${({ theme }) => theme.colors.textPrimary};

  padding: 5px;
  width: 100px;
`;

const S_ValuesSelectorContainer = styled.div`
  border: ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.rounded.xl};

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 5px 10px;

  & > label {
    color: ${({ theme }) => theme.colors.textPrimary};
    width: fit-content;
  }

  & input {
    flex: 1;
    color: ${({ theme }) => theme.colors.textAccent};
    border-radius: ${({ theme }) => theme.rounded.xs};
    border: none;
    font-weight: 500;
    font-size: 1rem;
    padding: 3px;
  }
`;

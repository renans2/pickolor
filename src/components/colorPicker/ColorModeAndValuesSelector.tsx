import { useState } from "react";
import styled from "styled-components";
import type { ColorMode } from "../../types/ColorMode";
import { HexSelector, HsvSelector, RgbSelector } from "./ValuesSelectors";

export default function ColorModeAndValuesSelector() {
  const [colorMode, setColorMode] = useState<ColorMode>("RGB");
  
  return (
    <S_Container>
      <select 
        id="colorMode" 
        value={colorMode}
        onChange={(e) => setColorMode(e.target.value as ColorMode)}
      >
        <option value="RGB">RGB</option>
        <option value="HSV">HSV</option>
        <option value="HEX">HEX</option>
      </select>

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
`;

const S_ValuesSelectorContainer = styled.div`
  display: flex;
  flex: 1;
  gap: 10px;
  padding: 10px;
  border-radius: 15px;

  border: 1px solid gray;
`;

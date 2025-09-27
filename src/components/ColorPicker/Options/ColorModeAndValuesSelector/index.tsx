import { useState } from "react";
import type { ColorMode } from "../../../../types/ColorMode";
import { HexSelector, HsvSelector, RgbSelector } from "./ValuesSelector";
import { S_Container, S_Select, S_ValuesSelectorContainer } from "./styles";

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

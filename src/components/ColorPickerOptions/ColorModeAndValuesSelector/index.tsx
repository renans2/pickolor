import type { ColorMode } from "../../../types/ColorMode";
import { S_Container, S_Select, S_ValuesSelectorContainer } from "./styles";
import useLocalStorage from "../../../hooks/useLocalStorage";
import RgbSelector from "./RgbSelector";
import HslSelector from "./HslSelector";
import HexSelector from "./HexSelector";

export default function ColorModeAndValuesSelector() {
  const [colorMode, setColorMode] = useLocalStorage<ColorMode>("colorMode", "rgb");
  
  return (
    <S_Container>
      <S_Select 
        id="colorMode" 
        value={colorMode}
        onChange={(e) => setColorMode(e.target.value as ColorMode)}
      >
        <option value="rgb">RGB</option>
        <option value="hsl">HSL</option>
        <option value="hex">HEX</option>
      </S_Select>

      <S_ValuesSelectorContainer>
        {colorMode === "rgb" && <RgbSelector />}
        {colorMode === "hsl" && <HslSelector />}
        {colorMode === "hex" && <HexSelector />}
      </S_ValuesSelectorContainer>
    </S_Container>
  );
}

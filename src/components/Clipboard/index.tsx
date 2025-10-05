import { useState } from "react";
import { useColorPicker } from "../../context/ColorPickerProvider";
import { S_Container, S_Select, S_SelectedColorModeToCopy } from "./styles";
import type { ColorMode } from "../../types/ColorMode";
import { Check, Copy } from "lucide-react";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function Clipboard() {
  const { color } = useColorPicker();
  const [colorMode, setColorMode] = useLocalStorage<ColorMode>("colorModeClipboard", "rgb");
  const [copied, setCopied] = useState(false);

  const toCopy = colorMode === "hex" 
    ? color.hex() 
    : color.css(colorMode as "rgb" | "hsl");

  const handleCopyToClipboard = async () => {
    if (!copied) {
      await navigator.clipboard.writeText(toCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <S_Container>
      <S_Select 
        id="colorModeClipboard" 
        value={colorMode}
        onChange={(e) => setColorMode(e.target.value as ColorMode)}
      >
        <option value="rgb">RGB</option>
        <option value="hsl">HSL</option>
        <option value="hex">HEX</option>
      </S_Select>

      <S_SelectedColorModeToCopy 
        onClick={handleCopyToClipboard}
        $copied={copied}
      >
        <span>{toCopy}</span>
        
        {copied ? (
          <Check size={20} />
        ) : (
          <Copy size={20} />
        )}
      </S_SelectedColorModeToCopy>
    </S_Container>
  );
}

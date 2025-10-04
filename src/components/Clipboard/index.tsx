import { useState } from "react";
import { useColorPicker } from "../../context/ColorPickerProvider";
import { S_Container, S_Select, S_SelectedColorModeToCopy } from "./styles";
import type { ColorMode } from "../../types/ColorMode";
import { Check, Copy } from "lucide-react";

type ClipboardColorMode = Exclude<ColorMode, "HSV"> | "HSL";

export default function Clipboard() {
  const { color } = useColorPicker();
  const [colorMode, setColorMode] = useState<ClipboardColorMode>("RGB");
  const [copied, setCopied] = useState(false);

  const toCopy = colorMode === "HEX" 
    ? color.hex() 
    : color.css(colorMode.toLowerCase() as "rgb" | "hsl");

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
        onChange={(e) => setColorMode(e.target.value as ClipboardColorMode)}
      >
        <option value="RGB">RGB</option>
        <option value="HSL">HSL</option>
        <option value="HEX">HEX</option>
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

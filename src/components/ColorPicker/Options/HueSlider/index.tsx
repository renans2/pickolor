import { useColorPicker } from "../../../../context/ColorPickerProvider";
import type React from "react";
import { S_HueSlider } from "./styles";

export default function HueSlider() {
  const { hue, color, setColor } = useColorPicker();

  const handleHueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = color.set("hsl.h", parseInt(e.target.value));
    setColor(newColor);
  }

  return (
    <S_HueSlider 
      id="hueSlider"
      type="range"
      min={0}
      max={359}
      value={hue}
      onChange={handleHueChange}
    />
  );
}

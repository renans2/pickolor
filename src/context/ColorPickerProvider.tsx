import React, { createContext, useContext, useRef, useState, type Dispatch, type RefObject, type SetStateAction } from "react";
import type { RGB } from "../types/RGB";
import type { HSL } from "../types/HSL";
import type { PinPosition } from "../types/PinPosition";
import chroma, { type Color } from "chroma-js";
import type { HEX } from "../types/HEX";
import type { HSV } from "../types/HSV";

type ColorPickerContextType = {
  pickerRef: RefObject<HTMLDivElement | null>
  color: Color;
  setColor: Dispatch<SetStateAction<Color>>;
  rgb: RGB;
  hex: HEX;
  hsl: HSL;
  hue: number;
  pinPosition: PinPosition;
}

const ColorPickerContext = createContext<ColorPickerContextType>({} as ColorPickerContextType);

export default function SelectedColorProvider({
  children
}: { children: React.ReactNode}) {
  const pickerRef = useRef<HTMLDivElement | null>(null);
  const [color, setColor] = useState<Color>(chroma.rgb(255, 254, 254));

  const pickerRect = pickerRef.current?.getBoundingClientRect();
  const rgb: RGB = color.rgb();
  const hex: HEX = color.hex();
  const hsl: HSL = color.hsl().map(val => Number.isNaN(val) ? 0 : val) as HSL;
  const hsv: HSV = color.hsv().map(val => Number.isNaN(val) ? 0 : val) as HSV;
  const hue = hsv[0];
  const pinPosition = {
    left: hsv[1] * (pickerRect?.width ?? 0),
    top: (1 - hsv[2]) * (pickerRect?.height ?? 0),
  };

  return (
    <ColorPickerContext.Provider value={{
      pickerRef,
      color,
      setColor,
      rgb,
      hex,
      hsl,
      hue,
      pinPosition,
    }}>
      {children}
    </ColorPickerContext.Provider>
  );
}

export const useColorPicker = () => {
  const context = useContext(ColorPickerContext);

  if (!context)
    throw new Error("The hook must be used within the context provider");

  return context;
}

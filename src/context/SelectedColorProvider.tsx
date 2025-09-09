import React, { createContext, useContext, useState, type Dispatch, type SetStateAction } from "react";
import type { RGB } from "../types/RGB";
import type { HSV } from "../types/HSV";
import type { PinPosition } from "../types/PinPosition";
import chroma, { type Color } from "chroma-js";

type ColorContextProps = {
  color: Color;
  setColor: Dispatch<SetStateAction<Color>>;
  rgb: RGB;
  hsv: HSV;
  hue: number;
  pinPosition: PinPosition;
}

const SelectedColorContext = createContext<ColorContextProps>({} as ColorContextProps);

export default function SelectedColorProvider({
  children
}: { children: React.ReactNode}) {
  const [color, setColor] = useState<Color>(chroma.rgb(255, 255, 255));

  const rgb: RGB = color.rgb();
  const hsv: HSV = color.hsv().map(val => Number.isNaN(val) ? 0 : val) as HSV;
  const hue = hsv[0];
  const pinPosition = {
    left: hsv[1] * 430,
    top: (1 - hsv[2]) * 250
  };

  return (
    <SelectedColorContext.Provider value={{
      color,
      setColor,
      rgb,
      hsv,
      hue,
      pinPosition,
    }}>
      {children}
    </SelectedColorContext.Provider>
  );
}

export const useSelectedColor = () => {
  const context = useContext(SelectedColorContext);

  if (!context)
    throw new Error("The hook must be used within the context provider");

  return context;
}

import React, { createContext, useContext, useEffect, useRef, useState, type Dispatch, type RefObject, type SetStateAction } from "react";
import type { RGB } from "../types/RGB";
import type { HSV } from "../types/HSV";
import type { PinPosition } from "../types/PinPosition";
import chroma from "chroma-js";

type ColorContextProps = {
  divRef: RefObject<HTMLDivElement | null>
  pinPosition: PinPosition;
  setPinPosition: Dispatch<SetStateAction<PinPosition>>;
  hue: number;
  setHue: Dispatch<SetStateAction<number>>;
  rgb: RGB;
  setRgb: Dispatch<SetStateAction<RGB>>;
  hsv: HSV;
  setHsv: Dispatch<SetStateAction<HSV>>;
}

const SelectedColorContext = createContext<ColorContextProps>({} as ColorContextProps);

export default function SelectedColorProvider({
  children
}: { children: React.ReactNode}) {
  const [hue, setHue] = useState(0);
  const [rgb, setRgb] = useState<RGB>([0, 0, 0]);
  const [hsv, setHsv] = useState<HSV>([0, 0, 0]);
  const [pinPosition, setPinPosition] = useState<PinPosition>({ left: 0, top: 0 });
  const divRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (!divRef.current) return;
    
  //   const { left, top } = pinPosition;
  //   const div = divRef.current.getBoundingClientRect();
  //   const saturation = (left / div.width);
  //   const value = (1 - (top / div.height));

  //   const color = chroma.hsv(hue, saturation, value);
  //   setRgb(color.rgb());
  //   setHsv(color.hsv());
  // }, [pinPosition]);

  useEffect(() => {
    if (!divRef.current) return;
    
    const color = chroma.rgb(rgb[0], rgb[1], rgb[2]);
    const hsv = color.hsv().map(val => Number.isNaN(val) ? 0 : val);
    setHsv(hsv as HSV);
    setHue(hsv[0]);
    
    const div = divRef.current?.getBoundingClientRect();
    setPinPosition({
      left: hsv[1] * div.width,
      top: (1 - hsv[2]) * div.height
    });
  }, [rgb]);

  return (
    <SelectedColorContext.Provider value={{
      divRef,
      pinPosition,
      setPinPosition,
      hue,
      setHue,
      rgb,
      setRgb,
      hsv,
      setHsv,
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

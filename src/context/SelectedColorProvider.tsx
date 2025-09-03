import React, { createContext, useContext, useState } from "react";
import type { RGB } from "../types/RGB";
import type { HSV } from "../types/HSV";

type ColorContextProps = {
  rgb: RGB;
  hsv: HSV;
}

const SelectedColorContext = createContext<ColorContextProps>({} as ColorContextProps);

export default function SelectedColorProvider({
  children
}: { children: React.ReactNode}) {
  const [rgb, setRgb] = useState<RGB>([0, 0, 0]);
  const [hsv, setHsv] = useState<HSV>([0, 0, 0]);

  return (
    <SelectedColorContext.Provider value={{
      rgb,
      hsv,
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

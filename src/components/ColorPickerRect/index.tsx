import { useColorPicker } from "../../context/ColorPickerProvider";
import { useEffect, useState } from "react";
import chroma from "chroma-js";
import { S_ColorPickerRect, S_ColorPin } from "./styles";

export default function ColorPickerRect() {
  const { 
    pinPosition: { left, top },
    color,
    setColor,
    hue,
  } = useColorPicker();
  const [isDragging, setIsDragging] = useState(false);
  const { pickerRef } = useColorPicker();

  const updatePinPosition = (clientX: number, clientY: number) => {
    if (!pickerRef.current) return;

    const div = pickerRef.current.getBoundingClientRect();
    let left = clientX - div.left;
    let top = clientY - div.top;

    left = Math.max(0, Math.min(left, div.width));
    top = Math.max(0, Math.min(top, div.height));

    const saturation = (left / div.width);
    const value = (1 - (top / div.height));

    const newColor = chroma.hsv(hue, saturation, value);
    setColor(newColor);
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    updatePinPosition(e.clientX, e.clientY);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    updatePinPosition(e.clientX, e.clientY);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        updatePinPosition(e.clientX, e.clientY);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <S_ColorPickerRect 
      ref={pickerRef}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      $hue={hue}
    >
      <S_ColorPin 
        $left={left}
        $top={top}
        $color={color}
      />
    </S_ColorPickerRect>
  );
}

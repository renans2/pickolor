import styled from "styled-components";
import { useSelectedColor } from "../../context/SelectedColorProvider";
import { useEffect, useState } from "react";

// type ColorPickerRectProps = {
//   hue: number;
// }

export default function ColorPickerRect() {
  const { 
    pinPosition: { left, top }, 
    setPinPosition, 
    divRef,
    hue,
  } = useSelectedColor();
  const [isDragging, setIsDragging] = useState(false);

  const updatePinPosition = (clientX: number, clientY: number) => {
    if (!divRef.current) return;

    const div = divRef.current.getBoundingClientRect();
    let left = clientX - div.left;
    let top = clientY - div.top;

    left = Math.max(0, Math.min(left, div.width));
    top = Math.max(0, Math.min(top, div.height));

    setPinPosition({ left, top });
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
      ref={divRef}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      $hue={hue}
    >
      <S_ColorPin 
        $left={left}
        $top={top}
      />
    </S_ColorPickerRect>
  );
}

const S_ColorPickerRect = styled.div.attrs<{
  $hue: number
}>(({ 
  $hue 
}) => ({
  style: {
    backgroundColor: `hsl(${$hue}, 100%, 50%)`,
  }
}))`
  width: 430px;
  height: 250px;
  border-radius: 20px 20px 0 0;
  position: relative;

  &::before {
    content: "";
    border-radius: 20px 20px 0 0;
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, white, transparent);
  }

  &::after {
    content: "";
    border-radius: 20px 20px 0 0;
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, black, transparent);
  }
`;

const S_ColorPin = styled.div.attrs<{
  $left: number;
  $top: number;
}>((props) => ({
  style: {
    left: `${props.$left}px`,
    top: `${props.$top}px`,
  }
}))`
  position: absolute;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 4px solid white;
  z-index: 1;
  background-color: black;
  box-shadow: 0 0 5px rgba(0,0,0,0.8);
  pointer-events: none;
`;

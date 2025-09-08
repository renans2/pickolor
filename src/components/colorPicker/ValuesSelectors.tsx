import styled from "styled-components";
import { useSelectedColor } from "../../context/SelectedColorProvider";
import type { RGB } from "../../types/RGB";

export function RgbSelector() {
  const { rgb, setRgb } = useSelectedColor();

  return (
    <>
      <label htmlFor="r">
        <span>R: </span>
        <S_Input 
          id="r" 
          type="number" 
          value={rgb[0]}
          onChange={(e) => setRgb((prev) => {
            const copy = [...prev] as RGB;
            copy[0] = parseInt(e.target.value);
            return copy;
          })}
        />
      </label>

      <label htmlFor="g">
        <span>G: </span>
        <S_Input 
          id="g" 
          type="number"
          value={rgb[1]}
          onChange={(e) => setRgb((prev) => {
            const copy = [...prev] as RGB;
            copy[1] = parseInt(e.target.value);
            return copy;
          })}
        />
      </label>

      <label htmlFor="b">
        <span>B: </span>
        <S_Input 
          id="b" 
          type="number"
          value={rgb[2]}
          onChange={(e) => setRgb((prev) => {
            const copy = [...prev] as RGB;
            copy[2] = parseInt(e.target.value);
            return copy;
          })}
        />
      </label>
    </>
  );
}

export function HsvSelector() {
  return (
    <>
      <label htmlFor="h">
        <span>H: </span>
        <S_Input 
          id="h" 
          type="number"
        />
      </label>

      <label htmlFor="s">
        <span>S: </span>
        <S_Input 
          id="s" 
          type="number"
        />
      </label>

      <label htmlFor="v">
        <span>V: </span>
        <S_Input 
          id="v" 
          type="number"
        />
      </label>
    </>
  );
}

const S_Input = styled.input`
  width: 50px;
`;

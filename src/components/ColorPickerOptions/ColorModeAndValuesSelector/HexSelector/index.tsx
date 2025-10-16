import { useEffect, useState } from "react";
import { useColorPicker } from "../../../../context/ColorPickerProvider";
import { HEX_REG_EXP } from "../../../../constants/hexRegExp";
import chroma from "chroma-js";
import styled, { css } from "styled-components";

export default function HexSelector() {
  const { hex, setColor } = useColorPicker();
  const [hexInput, setHexInput] = useState(hex);
  const [invalid, setInvalid] = useState(false);

  const handleChangeHexColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;
    setHexInput(input);

    if (HEX_REG_EXP.test(input)) {
      const newColor = chroma(e.target.value);
      setColor(newColor);
      setInvalid(false);
    } else {
      setInvalid(true);
    }
  };

  useEffect(() => {
    setHexInput(hex);
    setInvalid(false);
  }, [hex]);

  return (
    <>
      <label htmlFor="hex">
        <S_HexInput
          id="hex"
          type="text"
          value={hexInput}
          onChange={handleChangeHexColor}
          $invalid={invalid}
        />
      </label>
    </>
  );
}

const S_HexInput = styled.input<{ $invalid: boolean }>`
  width: 100px;
  
  ${({ $invalid }) => $invalid && css`
    outline: 2px solid red !important;
  `}
`;

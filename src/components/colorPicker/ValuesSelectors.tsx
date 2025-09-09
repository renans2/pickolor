import styled from "styled-components";
import { useSelectedColor } from "../../context/SelectedColorProvider";
import chroma from "chroma-js";
import { useEffect, useState } from "react";

export function RgbSelector() {
  const { rgb, color, setColor } = useSelectedColor();

  const handleChangeRgbChannel = (
    e: React.ChangeEvent<HTMLInputElement>, 
    channel: "r" | "g" | "b", 
  ) => {
    const newColor = color.set(`rgb.${channel}`, parseInt(e.target.value));
    setColor(newColor);
  }

  return (
    <>
      <label htmlFor="r">
        <span>R: </span>
        <S_RgbInput 
          id="r"
          value={rgb[0]}
          onChange={(e) => handleChangeRgbChannel(e, "r")}
        />
      </label>

      <label htmlFor="g">
        <span>G: </span>
        <S_RgbInput 
          id="g"
          value={rgb[1]}
          onChange={(e) => handleChangeRgbChannel(e, "g")}
        />
      </label>

      <label htmlFor="b">
        <span>B: </span>
        <S_RgbInput 
          id="b"
          value={rgb[2]}
          onChange={(e) => handleChangeRgbChannel(e, "b")}
        />
      </label>
    </>
  );
}

export function HsvSelector() {
  const { hsv, color, setColor } = useSelectedColor();

  const handleChangeHsvChannel = (
    e: React.ChangeEvent<HTMLInputElement>, 
    channel: "h" | "s" | "v", 
  ) => {
    let val = parseInt(e.target.value);
    val = channel === "h" ? val : val / 100;
    const newColor = color.set(`hsv.${channel}`, val);
    setColor(newColor);
  }

  return (
    <>
      <label htmlFor="h">
        <span>H: </span>
        <S_HsvInput 
          id="h"
          max={360}
          value={Math.round(hsv[0])}
          onChange={(e) => handleChangeHsvChannel(e, "h")}
        />
      </label>

      <label htmlFor="s">
        <span>S: </span>
        <S_HsvInput 
          id="s"
          max={100}
          value={Math.round(hsv[1] * 100)}
          onChange={(e) => handleChangeHsvChannel(e, "s")}
        />
      </label>

      <label htmlFor="v">
        <span>V: </span>
        <S_HsvInput 
          id="v"
          max={100}
          value={Math.round(hsv[2] * 100)}
          onChange={(e) => handleChangeHsvChannel(e, "v")}
        />
      </label>
    </>
  );
}

const HEX6 = /^#[0-9A-Fa-f]{6}$/;

export function HexSelector() {
  const { hex, setColor } = useSelectedColor();
  const [hexInput, setHexInput] = useState(hex);
  const [invalid, setInvalid] = useState(false);

  const handleChangeHexColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;
    setHexInput(input);

    if (HEX6.test(input)) {
      const newColor = chroma(e.target.value);
      setColor(newColor);
      setInvalid(false);
    } else {
      setInvalid(true);
    }
  }

  useEffect(() => {
    setHexInput(hex);
  }, [hex]);

  return (
    <>
      <label htmlFor="hex">
        <S_HexInput 
          id="hex"
          value={hexInput}
          onChange={handleChangeHexColor}
        />
      </label>

      {invalid && (
        <p>the input is invalid</p>
      )}
    </>
  );
}

const S_RgbInput = styled.input.attrs({
  type: "number",
  min: 0,
  max: 255,
})`
  width: 50px;
`;

const S_HsvInput = styled.input.attrs({
  type: "number",
  min: 0,
})`
  width: 50px;
`;

const S_HexInput = styled.input.attrs({
  type: "text",
})`
  width: 100px;
`;

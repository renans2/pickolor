import { useColorPicker } from "../../../../context/ColorPickerProvider";
import chroma from "chroma-js";
import { useEffect, useState } from "react";
import { S_Error, S_HexInput, S_HsvInput, S_RgbInput } from "./styles";

export function RgbSelector() {
  const { rgb, color, setColor } = useColorPicker();

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
  const { hsv, color, setColor } = useColorPicker();

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
  const { hex, setColor } = useColorPicker();
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
        />
      </label>

      {invalid && (
        <S_Error>The input is invalid!</S_Error>
      )}
    </>
  );
}

import { useColorPicker } from "../../../../context/ColorPickerProvider";
import chroma from "chroma-js";
import { useEffect, useState } from "react";
import { S_HexInput, S_HslInput, S_RgbInput } from "./styles";
import { HEX_REG_EXP } from "../../../../constants/hexRegExp";

export function RgbSelector() {
  const { rgb, color, setColor } = useColorPicker();

  const handleChangeRgbChannel = (
    e: React.ChangeEvent<HTMLInputElement>,
    channel: "r" | "g" | "b"
  ) => {
    const newColor = color.set(`rgb.${channel}`, parseInt(e.target.value));
    setColor(newColor);
  };

  return (
    <>
      <label htmlFor="r">
        <span>R: </span>
        <S_RgbInput
          id="r"
          type="number"
          min={0}
          max={255}
          value={rgb[0]}
          onChange={(e) => handleChangeRgbChannel(e, "r")}
        />
      </label>

      <label htmlFor="g">
        <span>G: </span>
        <S_RgbInput
          id="g"
          type="number"
          min={0}
          max={255}
          value={rgb[1]}
          onChange={(e) => handleChangeRgbChannel(e, "g")}
        />
      </label>

      <label htmlFor="b">
        <span>B: </span>
        <S_RgbInput
          id="b"
          type="number"
          min={0}
          max={255}
          value={rgb[2]}
          onChange={(e) => handleChangeRgbChannel(e, "b")}
        />
      </label>
    </>
  );
}

export function HslSelector() {
  const { hsl, color, setColor } = useColorPicker();

  const handleChangeHslChannel = (
    e: React.ChangeEvent<HTMLInputElement>,
    channel: "h" | "s" | "l"
  ) => {
    let val = parseInt(e.target.value);
    val = channel === "h" ? val : val / 100;
    const newColor = color.set(`hsl.${channel}`, val);
    setColor(newColor);
  };

  return (
    <>
      <label htmlFor="h">
        <span>H: </span>
        <S_HslInput
          id="h"
          type="number"
          min={0}
          max={360}
          value={Math.round(hsl[0])}
          onChange={(e) => handleChangeHslChannel(e, "h")}
        />
      </label>

      <label htmlFor="s">
        <span>S: </span>
        <S_HslInput
          id="s"
          type="number"
          min={0}
          max={100}
          value={Math.round(hsl[1] * 100)}
          onChange={(e) => handleChangeHslChannel(e, "s")}
        />
      </label>

      <label htmlFor="l">
        <span>L: </span>
        <S_HslInput
          id="l"
          type="number"
          min={0}
          max={100}
          value={Math.round(hsl[2] * 100)}
          onChange={(e) => handleChangeHslChannel(e, "l")}
        />
      </label>
    </>
  );
}

export function HexSelector() {
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

import styled from "styled-components";
import { useColorPicker } from "../../../../context/ColorPickerProvider";

export default function HslSelector() {
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

const S_HslInput = styled.input`
  width: 50px;
`;

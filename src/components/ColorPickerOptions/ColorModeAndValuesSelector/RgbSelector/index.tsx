import styled from "styled-components";
import { useColorPicker } from "../../../../context/ColorPickerProvider";

export default function RgbSelector() {
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

const S_RgbInput = styled.input`
  width: 50px;
`;

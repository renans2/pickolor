import styled from "styled-components";

type ColorPickerRectProps = {
  hue: number;
}

export default function ColorPickerRect({
  hue,
}: ColorPickerRectProps) {
  
  return (
    <S_ColorPickerRect $hue={hue}>
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
  width: 400px;
  height: 400px;
  border-radius: 15px;
  position: relative;

  &::before {
    content: "";
    border-radius: 15px;
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, white, transparent);
  }

  &::after {
    content: "";
    border-radius: 15px;
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, black, transparent);
  }
`;

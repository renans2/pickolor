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

import styled from "styled-components";

export function RgbSelector() {
  return (
    <>
      <label htmlFor="r">
        <span>R: </span>
        <S_Input id="r" type="number" />
      </label>

      <label htmlFor="g">
        <span>G: </span>
        <S_Input id="g" type="number" />
      </label>

      <label htmlFor="b">
        <span>B: </span>
        <S_Input id="b" type="number" />
      </label>
    </>
  );
}

export function HsvSelector() {
  return (
    <>
      <label htmlFor="h">
        <span>H: </span>
        <S_Input id="h" type="number" />
      </label>

      <label htmlFor="s">
        <span>S: </span>
        <S_Input id="s" type="number" />
      </label>

      <label htmlFor="v">
        <span>V: </span>
        <S_Input id="v" type="number" />
      </label>
    </>
  );
}

const S_Input = styled.input`
  width: 50px;
`;

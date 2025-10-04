import styled, { ThemeProvider } from "styled-components";
import ColorPreview from "./components/ColorPreview";
import ColorPickerProvider from "./context/ColorPickerProvider";
import Clipboard from "./components/Clipboard";
import { GlobalStyles } from "./styles/global";
import { theme } from "./styles/theme";
import SavedColors from "./components/SavedColors";
import { COLOR_PICKER_RECT_HEIGHT, COLOR_PICKER_RECT_WIDTH } from "./constants/dimensions";
import Header from "./components/Header";
import { useEffect } from "react";
import ColorPickerRect from "./components/ColorPickerRect";
import ColorPickerOptions from "./components/ColorPickerOptions";

export default function App() {
  useEffect(() => {
    document.title = "Pickolor (Color Picker)";
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ColorPickerProvider>
        <Header />
        <S_MainContainer>
          <ColorPickerRect />
          <ColorPickerOptions />
          <ColorPreview />
          <Clipboard />
          <SavedColors />
        </S_MainContainer>
      </ColorPickerProvider>
    </ThemeProvider>
  )
}

const S_MainContainer = styled.main`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr 100px 50px 100px 100px;
  grid-template-areas:
    "pickerRect"
    "pickerOptions"
    "preview"
    "savedColors"
    "clipboard";
  gap: 15px;
  padding: 20px;

  @media (min-width: 768px) {
    width: clamp(768px, 50vw, 850px);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    grid-template-columns: ${COLOR_PICKER_RECT_WIDTH}px .5fr 1fr;
    grid-template-rows: ${COLOR_PICKER_RECT_HEIGHT}px 100px;
    grid-template-areas:
      "pickerRect preview savedColors"
      "pickerOptions clipboard clipboard";
    padding: 0;
  }
`;

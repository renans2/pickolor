import styled, { ThemeProvider } from "styled-components";
import ColorPreview from "./components/ColorPreview";
import ColorPickerProvider from "./context/ColorPickerProvider";
import Clipboard from "./components/Clipboard";
import { GlobalStyles } from "./styles/global";
import { theme } from "./styles/theme";
import SavedColors from "./components/SavedColors";
import {
  DESKTOP_COLOR_PICKER_RECT_WIDTH,
  DESKTOP_COLOR_PICKER_RECT_HEIGHT,
} from "./constants/dimensions";
import Header from "./components/Header";
import ColorPickerRect from "./components/ColorPickerRect";
import ColorPickerOptions from "./components/ColorPickerOptions";
import useMediaQuery from "./hooks/useMediaQuery";

export default function App() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ColorPickerProvider>
        <Header />
        <S_MainContainer>
          <ColorPickerRect />
          <ColorPickerOptions />
          {isDesktop && <ColorPreview />}
          <SavedColors />
          <Clipboard />
        </S_MainContainer>
      </ColorPickerProvider>
    </ThemeProvider>
  );
}

const S_MainContainer = styled.main`
  width: 100%;
  height: calc(100vh - 60px);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 200px auto minmax(0, 1fr) 100px;
  grid-template-areas:
    "pickerRect"
    "pickerOptions"
    "savedColors"
    "clipboard";
  gap: 15px;
  padding: 15px;

  @media (min-width: 768px) {
    width: 768px;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    grid-template-columns: ${DESKTOP_COLOR_PICKER_RECT_WIDTH}px 0.5fr 1fr;
    grid-template-rows: ${DESKTOP_COLOR_PICKER_RECT_HEIGHT}px auto;
    grid-template-areas:
      "pickerRect preview savedColors"
      "pickerOptions pickerOptions clipboard";
    padding: 0;
  }
`;

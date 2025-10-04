import styled, { ThemeProvider } from "styled-components";
import ColorPicker from "./components/ColorPicker";
import ColorPreview from "./components/ColorPreview";
import SelectedColorProvider from "./context/SelectedColorProvider";
import Clipboard from "./components/Clipboard";
import { GlobalStyles } from "./styles/global";
import { theme } from "./styles/theme";
import SavedColors from "./components/SavedColors";
import { COLOR_PICKER_RECT_HEIGHT, COLOR_PICKER_RECT_WIDTH } from "./constants/dimensions";
import Header from "./components/Header";

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SelectedColorProvider>
        <Header />
        <S_Container>
          <ColorPicker />
          <ColorPreview />
          <Clipboard />
          <SavedColors />
        </S_Container>
      </SelectedColorProvider>
    </ThemeProvider>
  )
}

const S_Container = styled.main`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr 50px 100px 100px;
  grid-template-areas:
    "picker"
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
      "picker preview savedColors"
      "picker clipboard clipboard";
    padding: 0;
  }
`;

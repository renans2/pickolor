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

const S_Container = styled.div`
  display: grid;
  grid-template-columns: ${COLOR_PICKER_RECT_WIDTH}px 150px 250px;
  grid-template-rows: ${COLOR_PICKER_RECT_HEIGHT}px 100px;
  grid-template-areas:
    "picker preview savedColors"
    "picker clipboard clipboard";
  gap: 15px;
`;

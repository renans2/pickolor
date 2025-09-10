import styled, { ThemeProvider } from "styled-components";
import ColorPicker from "./components/colorPicker/ColorPicker";
import ColorPreview from "./components/preview/ColorPreview";
import SelectedColorProvider from "./context/SelectedColorProvider";
import Clipboard from "./components/clipboard/Clipboard";
import { GlobalStyles } from "./globalStyles";
import { theme } from "./theme";
import SavedColors from "./components/savedColors/SavedColors";
import { COLOR_PICKER_RECT_HEIGHT, COLOR_PICKER_RECT_WIDTH } from "./constants/dimensions";

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SelectedColorProvider>
        {/* <header>
          <p>Color picker</p>
        </header> */}

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
  grid-template-columns: ${COLOR_PICKER_RECT_WIDTH}px 200px 200px;
  grid-template-rows: ${COLOR_PICKER_RECT_HEIGHT}px 100px;
  grid-template-areas:
    "picker preview savedColors"
    "picker clipboard clipboard";
  gap: 15px;
`;

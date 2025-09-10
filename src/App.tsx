import styled, { ThemeProvider } from "styled-components";
import ColorPicker from "./components/colorPicker/ColorPicker";
import ColorPreview from "./components/preview/ColorPreview";
import SelectedColorProvider from "./context/SelectedColorProvider";
import Clipboard from "./components/clipboard/Clipboard";
import { GlobalStyles } from "./globalStyles";
import { theme } from "./theme";

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
        </S_Container>
      </SelectedColorProvider>
    </ThemeProvider>
  )
}

const S_Container = styled.div`
  position: relative;
  display: grid;
  grid-template-areas:
    "picker preview"
    "picker clipboard";
  gap: 20px;
`;

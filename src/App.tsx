import ColorPicker from "./components/colorPicker/ColorPicker";
import SelectedColorProvider from "./context/SelectedColorProvider";

function App() {

  return (
    <SelectedColorProvider>
      <header>
        <p>Color picker</p>
      </header>

      <ColorPicker />
    </SelectedColorProvider>
  )
}

export default App

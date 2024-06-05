import ReactDOM from "react-dom/client";
import ColorPicker from "./components/ColorPicker";
import "./index.css";
import { useColors } from "./hooks/useColors";

const App = () => {
  const { handleChangeColor, handleSubmitSaveColor, color } = useColors();

  return (
    <div className="container">
      <ColorPicker
        handleChangeColor={handleChangeColor}
        handleSubmitSaveColor={handleSubmitSaveColor}
        color={color}
      />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("app")).render(<App />);

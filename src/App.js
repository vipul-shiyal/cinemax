// import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import "./styles/main.scss";
import { ConfigProvider } from "antd";
import theme from "./theme/Theme";

function App() {
  return (
    <BrowserRouter>
      <ConfigProvider theme={theme}>
        <Routes />
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;

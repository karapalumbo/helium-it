import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

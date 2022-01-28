import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";

import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container maxW="container.lg">
          <Navbar />
        </Container>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;

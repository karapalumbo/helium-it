import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Container } from "@chakra-ui/react";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container maxW="container.lg">
          <Navbar />
          <Routes />
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

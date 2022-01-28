import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import Routes from "./Routes";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Container maxW="container.lg">
          <Navbar />
        </Container>
        <Routes />
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;

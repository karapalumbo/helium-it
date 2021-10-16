import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { About } from "./About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <header className="App-header">
          <img
            className="img-banner"
            src="https://images.unsplash.com/photo-1536834733795-ce0e31e99a58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2833&q=80"
            alt="Green neon lights"
          ></img>
          <h1>Helium IT, LLC</h1>
          <About />
        </header>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

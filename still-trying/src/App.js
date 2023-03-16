import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Component/Home";
import About from "./Component/About";
import Navbar from "./Component/Navbar";
import Marquee from "./Component/Marque";

function App() {
  return (
    <div className="App">
      <Marquee />
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;

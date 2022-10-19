import "./App.css"
import Home from "./components/home/Home";
import {Route, Routes} from "react-router-dom"
import Videos from "./components/videos/Videos";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <div>
      <Routes >
        <Route path="/" element={<Home/>} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;

import "./App.css"
import Home from "./components/home/Home";
import {Route, Routes} from "react-router-dom"
import Videos from "./components/videos/Videos";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div>
      <Routes >
        <Route path="/" element={<Home/>} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

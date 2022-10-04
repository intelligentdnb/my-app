import "./App.css"
import Intelligentheader from "./components/home/header/IntelligentHeader";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import {Route, Routes} from "react-router-dom"
import Videos from "./components/videos/Videos";

function App() {
  return (
    <div>
      <Routes >
        <Route path="/" element={<Home/>} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </div>
  );
}

export default App;

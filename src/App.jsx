import Navbar from "./layouts/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import EventsSingle from "./pages/EventsSingle";
import Programs from "./pages/dropdown-programs/Programs";
import ProgramsSingle from "./pages/dropdown-programs/ProgramsSingle";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/single" element={<EventsSingle />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/single" element={<ProgramsSingle />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

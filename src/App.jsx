import { Routes, Route } from "react-router-dom";
import ScrollToHashElement from "./components/ScrollToHashElement.jsx";
import Index from "./index.jsx";
import Practicum from "./Practicum.jsx";

function App() {
  return (
    <>
      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/practicum" element={<Practicum />} />
      </Routes>
    </>
  );
}

export default App;

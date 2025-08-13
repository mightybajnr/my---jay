import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage"
import EcommercePage from "./pages/EcommercePage";
import Dashboard from "./components/Admin/Dashboard";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/shopPage" element={<EcommercePage />} />
      </Routes>
    </>
  );
}

export default App;

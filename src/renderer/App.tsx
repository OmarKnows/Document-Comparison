import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import ComparisonPage from "./Pages/ComparisonPage";
import AddDocumentPage from "./Pages/AddDocumentPage";
import Header from "./Components/Header";
import "./App.css";

export default function App() {
  return (
    <Router>
      {true ? <Header /> : <></>}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/compare" element={<ComparisonPage />} />
        <Route path="/add" element={<AddDocumentPage />} />
      </Routes>
    </Router>
  );
}

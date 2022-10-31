import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import ComparisonPage from "./Pages/ComparisonPage";
import AddDocumentPage from "./Pages/AddDocumentPage";
import Header from "./Components/Header";
import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  const [header, setHeader] = useState<Boolean>(false);
  const [change, setChange] = useState<Boolean>(false);

  useEffect(() => {
    if (localStorage.getItem("userInfo") != null) {
      setHeader(true);
    } else {
      setHeader(false);
    }
    console.log(header);
  }, []);

  return (
    <Router>
      {header ? <Header /> : <></>}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/compare" element={<ComparisonPage />} />
        <Route path="/add" element={<AddDocumentPage />} />
      </Routes>
    </Router>
  );
}

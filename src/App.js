import { React } from "react";
import Item from "./components/item";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router base="/">
      <Routes>
        <Route path="/" element={<Item />} />
      </Routes>
    </Router>
  );
}

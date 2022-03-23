import React from "react";
import Home from "./Home";
import Edit from "./edit";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Tables from "./utils/Table";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Home />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/user" element={<Tables />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

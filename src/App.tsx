import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import OverviewProducts from "./pages/overviewProducts/OverviewProducts";
import NoPage from "./pages/noPage/NoPage";
import Navbar from "./components/Navbar";
import Signup from "./pages/signup/signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="All-Products" element={<OverviewProducts />} />
          <Route path="*" element={<NoPage />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

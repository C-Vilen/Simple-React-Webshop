import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/home/Home';
import OverviewProducts from './pages/overviewProducts/OverviewProducts';
import NoPage from './pages/noPage/NoPage';
import OverCat from './pages/categories/OverCat';
import UnderCat from './pages/categories/UnderCat';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route index element={<Home />} />
          <Route path="All-Products" element={<OverviewProducts />} />
          <Route path="Over-Category" element={<OverCat />} />
          <Route path="Under-Category" element={<UnderCat />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

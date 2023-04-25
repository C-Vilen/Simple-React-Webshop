import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Home from './pages/home/Home';
import OverviewProducts from './pages/overviewProducts/OverviewProducts';
import NoPage from './pages/noPage/NoPage';
import Navbar from './components/Navbar';
import Login from './pages/login/Login';
import Basket from './pages/basket/Basket';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="All-Products" element={<OverviewProducts />} />
          <Route path="Login" element={<Login />} />
          <Route path="Basket" element={<Basket />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

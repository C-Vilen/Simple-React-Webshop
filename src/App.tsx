import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Home from './pages/home/Home';
import OverviewProducts from './pages/overviewProducts/OverviewProducts';
import NoPage from './pages/noPage/NoPage';
import OverCat from './pages/categories/OverCat';
import UnderCat from './pages/categories/UnderCat';
import Login from './pages/login/Login';
import Basket from './pages/basket/Basket';
import Signup from "./pages/signup/signup";
import Navbar from "./components/navbar";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route index element={<Home />} />
          <Route path="All-Products" element={<OverviewProducts />} />
          <Route path="Over-Category" element={<OverCat />} />
          <Route path="Under-Category" element={<UnderCat />} />
          <Route path="Login" element={<Login />} />
          <Route path="Basket" element={<Basket />} />
          <Route path="*" element={<NoPage />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

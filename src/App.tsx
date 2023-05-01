import React, { createContext, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Home from "./pages/home/Home";
import OverviewProducts from "./pages/overviewProducts/OverviewProducts";
import NoPage from "./pages/noPage/NoPage";
import Login from "./pages/login/Login";
import Basket from "./pages/basket/Basket";
import OneProduct from "./pages/oneProduct/OneProduct";
import Signup from "./pages/signup/signup";
import Navbar from "./components/Navbar";
// import { Customer, CustomerContext } from "./CustomerContext";

export interface Customer {
  customerid: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  basketId: number;
}

export interface CustomerContext {
  customer: Customer;
  updateCustomer: (customer: Customer) => void;
}

export const CustomerContext = createContext<CustomerContext | undefined>(
  undefined
);

function App() {
  const [customer, setCustomer] = useState<Customer>({
    customerid: 0,
    firstName: "Guest",
    lastName: "",
    password: "",
    email: "",
    basketId: 0,
  });

  const updateCustomer = (newCustomer: Customer) => {
    setCustomer(newCustomer);
  };

  return (
    <BrowserRouter>
      <CustomerContext.Provider value={{ customer, updateCustomer }}>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="All-Products" element={<OverviewProducts />} />
            <Route path="Login" element={<Login />} />
            <Route path="Basket" element={<Basket />} />
            <Route path="Product/:prodId" element={<OneProduct />} />
            <Route path="*" element={<NoPage />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </CustomerContext.Provider>
    </BrowserRouter>
  );
}

export default App;

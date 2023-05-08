import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Home from "./pages/home/Home";
import OverviewProducts from "./pages/overviewProducts/OverviewProducts";
import NoPage from "./pages/noPage/NoPage";
import OverCat from "./pages/categories/OverCat";
import UnderCat from "./pages/categories/UnderCat";
import Login from "./pages/login/Login";
import Basket from "./pages/basket/Basket";
import OneProduct from "./pages/oneProduct/OneProduct";
import Signup from "./pages/signup/signup";

import AboutPage from "./pages/aboutPage/AboutPage";
import Navbar from "./components/StandardComponents/CustomNavbar";
// import { Customer, CustomerContext } from "./CustomerContext";

export interface Customer {
  customerId: number;
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

export default function App() {
  const [customer, setCustomer] = useState<Customer>({
    customerId: 0,
    firstName: "Guest",
    lastName: "",
    password: "",
    email: "",
    basketId: 0,
  });
  const [productCount, setProductCount] = useState(0);

  const updateCustomer = (newCustomer: Customer) => {
    setCustomer(newCustomer);
  };

  async function postCustomer() {
    // Try to get guest from database
    try {
      const response = await fetch(`http://localhost:3000/customers/guest`);
      const data = await response.json();
      setCustomer(data);
      console.log(customer);
    } catch (error) {
      console.error("there was an error fetching guest customers: " + error);
    }
  }

  const deleteGuestBasket = async () => {
    try {
      // deletes the data for the Guest account
      await fetch(`http://localhost:3000/baskets/5`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Error deleting basket data:", error);
    }
  };

  useEffect(() => {
    deleteGuestBasket();
    postCustomer();
  }, []);

  function updateProductCount(count: number) {
    setProductCount(count);
  }

  return (
    <BrowserRouter>
      <CustomerContext.Provider value={{ customer, updateCustomer }}>
        <Routes>
          <Route
            path="/"
            element={
              <Navbar
                productCount={productCount}
                updateProductCount={updateProductCount}
              />
            }>
            <Route index element={<Home />} />
            <Route path="All-Products" element={<OverviewProducts />} />
            <Route path="Over-Category" element={<OverCat />} />
            <Route path="Under-Category" element={<UnderCat />} />
            <Route path="Login" element={<Login />} />
            <Route
              path="Basket"
              element={<Basket updateProductCount={updateProductCount} />}
            />
            <Route
              path="Product/:prodId"
              element={<OneProduct updateProductCount={updateProductCount} />}
            />
            <Route path="*" element={<NoPage />} />
            <Route path="signup" element={<Signup />} />
            <Route path="About" element={<AboutPage />} />
          </Route>
        </Routes>
      </CustomerContext.Provider>
    </BrowserRouter>
  );
}

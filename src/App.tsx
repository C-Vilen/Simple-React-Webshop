import React, { useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Home from "./pages/home/Home";
import OverviewProducts from "./pages/overviewProducts/OverviewProducts";
import NoPage from "./pages/noPage/NoPage";
import Login from "./pages/login/Login";
import Basket from "./pages/basket/Basket";
import Signup from "./pages/signup/signup";
import Navbar from "./components/Navbar";
import { Customer, CustomerContext } from "./CustomerContext";

function App() {
  const [customer, setCustomer] = useState<Customer>({
    customerid: 0,
    firstName: "guest",
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
      <CustomerContext.Provider value={customer}>
        <Routes>
          <Route path="/" element={<Navbar updateCustomer={updateCustomer} />}>
            <Route index element={<Home />} />
            <Route path="All-Products" element={<OverviewProducts />} />
            <Route
              path="Login"
              element={<Login updateCustomer={updateCustomer} />}
            />
            <Route path="Basket" element={<Basket />} />
            <Route path="*" element={<NoPage />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </CustomerContext.Provider>
    </BrowserRouter>
  );
}

export default App;

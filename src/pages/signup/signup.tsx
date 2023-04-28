import { Fragment } from "react";
import React, { useState } from "react";
import "./signup.css";
import { JsonObjectExpression } from "typescript";

export default function Signup() {
  interface CustomerValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }

  const postCustomer = async (customer: string) => {
    const response = await fetch("/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    });

    if (!response.ok) {
      throw new Error("Failed to post customer data");
    }
  };

  const [CustomerValues, setCustomerValues] = useState<CustomerValues>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setCustomerValues({ ...CustomerValues, [name]: value });
  };

  const handleSignup = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(CustomerValues);
    const customerJSON = JSON.stringify(CustomerValues);
    postCustomer(customerJSON);
    setCustomerValues({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    }); // Reset form values after submission
  };

  return (
    <Fragment>
      <main className="login-main">
        <section className="login-section">
          <form onSubmit={handleSignup}>
            <div>
              <img
                src="./assets/images/logo/duck_logo_placeholder.svg"
                width="72px"
              />
              <h1>Become a member!</h1>{" "}
            </div>
            <div className="form-floating">
              <input
                className="form-control"
                type="text"
                id="firstName"
                name="firstName"
                value={CustomerValues.firstName}
                onChange={handleInputChange}
                placeholder="fname"
              />
              <label htmlFor="firstName">Name:</label>
            </div>
            <div className="form-floating">
              <input
                className="form-control"
                type="text"
                id="lastName"
                name="lastName"
                value={CustomerValues.lastName}
                onChange={handleInputChange}
                placeholder="lname"
              />
              <label htmlFor="lastName">Lastname:</label>
            </div>
            <div className="form-floating">
              <input
                className="form-control"
                type="email"
                id="email"
                name="email"
                value={CustomerValues.email}
                onChange={handleInputChange}
                placeholder="email"
              />
              <label htmlFor="email">Email:</label>
            </div>
            <div className="form-floating">
              <input
                className="form-control"
                type="password"
                id="password"
                name="password"
                value={CustomerValues.password}
                onChange={handleInputChange}
                placeholder="password"
              />
              <label htmlFor="password">Password:</label>
            </div>
            <button type="submit" className="BlackButton btn">
              Signup
            </button>
          </form>
        </section>
      </main>
    </Fragment>
  );
}

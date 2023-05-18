import { Fragment, useEffect } from "react";
import React, { useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/StandardComponents/Footer";

export default function Signup() {
  interface CustomerValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }

  const [CustomerValues, setCustomerValues] = useState<CustomerValues>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  //Scrolls to the top of the page, on first render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const postCustomer = async (customer: string) => {
    try {
      const response = await fetch("http://localhost:3000/customers", {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: customer,
      });

      if (!response.ok) {
        throw new Error("Failed to post customer data");
      }
    } catch (error) {
      alert("You have not been signed up. Please try again later");
      throw new Error("Could not connect to ServerAPI " + error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setCustomerValues({ ...CustomerValues, [name]: value });
  };

  const handleSignup = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Getting the form data
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const password = formData.get("password") as string;
    const email = formData.get("email") as string;

    // Check if firstname is at 2-20 characters and not ending with " ":
    if (firstName.length < 2) {
      alert("Name must be at least 2 characters");
      return;
    }

    if (firstName.length > 20) {
      alert("First name cannot be more than 20 characters");
      return;
    }

    if (
      firstName.includes(
        "1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9"
      )
    ) {
      alert("First name cannot contain numbers");
      return;
    }

    if (firstName.endsWith(" ")) {
      alert("First name cannot end with blank spaces");
      return;
    }

    // Check if lastName is not empty
    if (lastName.length === 0) {
      alert("Last name is required");
      return;
    }

    if (
      lastName.includes(
        "1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9"
      )
    ) {
      alert("Last name cannot contain numbers");
      return;
    }

    if (lastName.endsWith(" ")) {
      alert("Surname cannot end with blank spaces");
      return;
    }

    // Check if password is at least 4 characters
    if (password.length < 4) {
      alert("Password must contain at least 4 digits");
      return;
    }

    if (
      !password.includes(
        "1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9"
      )
    ) {
      alert("Password must contain at least 1 number");
      return;
    }

    if (password.includes(" ")) {
      alert("Password cannot contain blank spaces");
      return;
    }

    // Check if email is not empty
    if (email.trim().length === 0) {
      alert("Email is required");
      return;
    }

    // Valid form date, which creates a customer object
    const CustomerValues = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const customerJSON = JSON.stringify(CustomerValues);
    postCustomer(customerJSON);

    // Reset form values after submission
    e.currentTarget.reset();

    // Navigate to the login page
    navigate("/Login");
  };

  return (
    <Fragment>
      <main className="content">
        <section className="form-section">
          <section className="login-section">
            <form onSubmit={handleSignup}>
              <div>
                <img
                  src="assets/images/form-duck.svg"
                  width="72px"
                  alt="404 sad duck"
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
        </section>
        <Footer />
      </main>
    </Fragment>
  );
}

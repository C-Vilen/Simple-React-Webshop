import { Fragment } from "react";
import React, { useState } from "react";
import "./signup.css";

export default function Signup() {
  interface FormValues {
    name: string;
    lastname: string;
    email: string;
    password: string;
  }

  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSignup = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(formValues); // Do something with form values here
    setFormValues({
      name: "",
      lastname: "",
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
                id="name"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                placeholder="fname"
              />
              <label htmlFor="name">Name:</label>
            </div>
            <div className="form-floating">
              <input
                className="form-control"
                type="text"
                id="lastname"
                name="lastname"
                value={formValues.lastname}
                onChange={handleInputChange}
                placeholder="lname"
              />
              <label htmlFor="lastname">Lastname:</label>
            </div>
            <div className="form-floating">
              <input
                className="form-control"
                type="email"
                id="email"
                name="email"
                value={formValues.email}
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
                value={formValues.password}
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

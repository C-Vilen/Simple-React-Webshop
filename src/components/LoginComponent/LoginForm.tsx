import React, { Fragment, useEffect, useState } from "react";

// CSS imports
import "./LoginForm.css";

export default function LoginForm() {
  //   const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //     const inputName = document.getElementById("email") as HTMLInputElement;
  //     localStorage.setItem("name", inputName.value);
  //     const inputPassword = document.getElementById(
  //       "password"
  //     ) as HTMLInputElement;
  //     localStorage.setItem("password", inputPassword.value);
  //   };
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    async function fetchCustomers() {
      const response = await fetch(
        `http://localhost:3000/customers/${userEmail}`,
        {
          mode: "cors",
          method: "GET",
        }
      );
      const data = await response.json();
      setCustomers(data);
    }

    fetchCustomers();
  }, []);
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const customerExists = customers.find((customer: any) => {
      return customer.email === userEmail && customer.password === password;
    });
    console.log(customerExists);
    setUserEmail("");
    setPassword("");
  };

  //   const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //     async function fetchCustomers() {
  //       const response = await fetch(
  //         `http://localhost:3000/customers/:${userEmail}`,
  //         {
  //           mode: "cors",
  //           method: "GET",
  //         }
  //       );
  //       const data = await response.json();
  //       setCustomers(data);
  //     }
  //     console.log(customers);
  //     fetchCustomers();
  //   };
  return (
    <Fragment>
      <main className="content login-main">
        <section className="login-section">
          <form action="" onSubmit={handleFormSubmit}>
            <img
              src="../assets/images/logo/duck_logo_placeholder.svg"
              alt=""
              width="72px"
            />
            <h1>Become a member!</h1>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                value={userEmail}
                onChange={(event) => setUserEmail(event.target.value)}
                placeholder="email"
                required
              />
              <label htmlFor="name">Enter email:</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="password"
                required
              />
              <label htmlFor="password">Enter password:</label>
            </div>
            <div className="checkbox m-3">
              <input type="checkbox" id="checkbox" value="remember-me" />
              <label htmlFor="checkbox">Remember me</label>
            </div>
            <button type="submit" className="BlackButton btn">
              Register now!
            </button>
          </form>
        </section>
      </main>
    </Fragment>
  );
}

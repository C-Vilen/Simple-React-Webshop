import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { CustomerContext } from "../App";

export default function Navbar() {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error("customer context is undefined");
  }
  const { customer, updateCustomer } = context;

  function logout() {
    //implement logout function, set context customer to guest again.
    updateCustomer({
      customerId: 0,
      firstName: "Guest",
      lastName: "",
      password: "",
      email: "",
      basketId: 0,
    });
  }

  function showName() {
    if (customer.firstName !== "Guest") {
      return (
        <div>
          <button
            className="login-btn btn YellowButton"
            type="submit"
            onClick={logout}
            id="login-btn">
            <i className="bi-cart-fill me-1"></i>
            Logout
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/Login" className="d-flex">
            <button
              className="login-btn btn YellowButton"
              type="submit"
              id="login-btn">
              <i className="bi-cart-fill me-1"></i>
              Login
            </button>
          </Link>
        </div>
      );
    }
  }

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg">
        <div className="container px-4 px-lg-5">
          <img
            className="logo-img"
            src="assets/images/Badeanden_logo-02.png"
            alt=""></img>
          <Link className="navbar-brand" to="/">
            The Rubber Duck
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Categories
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/All-Products">
                      All products
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="./pages/productOverviewPage/erhvervOverview.html">
                      Professions
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="./pages/productOverviewPage/fastelavnOverview.html">
                      Carnival
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="./pages/productOverviewPage/diverseOverview.html">
                      Various ducks
                    </a>
                  </li>
                </ul>
              </li>
              <form
                action="https://en.wikipedia.org/wiki/Rubber_duck"
                className="d-flex">
                <button
                  className="about-btn btn YellowButton"
                  type="submit"
                  id="about-btn">
                  <i className="bi-cart-fill me-1"></i>
                  About Rubber Ducks
                </button>
              </form>
            </ul>
            <h6 className="welcome-text" id="welcome-text">
              {customer?.firstName}
            </h6>
            {showName()}

            <Link to="/Basket" className="d-flex">
              <button className="btn YellowButton" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Basket
                <span
                  className="badge bg-dark text-white ms-1 rounded-pill"
                  id="basketNumber">
                  0
                </span>
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
}

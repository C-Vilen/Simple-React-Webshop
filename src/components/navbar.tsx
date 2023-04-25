import { Outlet, Link } from "react-router-dom";

// Logout function
function logout() {
  localStorage.clear();
  // Uses the non-null assertion operator !
  let x = document.getElementById("login-btn")!;
  x.style.display = "block";
  // Uses the non-null assertion operator !
  let y = document.getElementById("logout-btn")!;
  y.style.display = "none";
  window.location.reload();
}

export default function Navbar() {
  return (
    <>
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
            <Link className="YellowButton btn" to="/signup">
              Signup
            </Link>
            <h6 className="welcome-text" id="welcome-text">
              error
            </h6>
            <form action="./pages/loginPage/login.html" className="d-flex">
              <button
                className="login-btn btn YellowButton"
                type="submit"
                id="login-btn">
                <i className="bi-cart-fill me-1"></i>
                Login
              </button>
            </form>

            <button
              className="logout-btn btn YellowButton"
              id="logout-btn"
              onClick={logout}>
              <i className="bi-cart-fill me-1"></i>
              Logout
            </button>
            <form action="./pages/cartPage/cart.html" className="d-flex">
              <button className="btn YellowButton" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Basket
                <span
                  className="badge bg-dark text-white ms-1 rounded-pill"
                  id="basketNumber">
                  0
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

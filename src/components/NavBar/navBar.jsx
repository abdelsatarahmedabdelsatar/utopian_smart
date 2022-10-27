import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './navBar.css'
import  {Link}  from 'react-router-dom';

function NavBar() {
  return (
    <>
      <nav
        style={{ fontFamily: "cursive" }}
        className="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top"
      >
        <div className="container-fluid">
          <Link className="navbar-brand fs-4" to="/">
            <img
              className="rounded-circle border"
              src={process.env.PUBLIC_URL + '/logo.jpg'}
              alt="LOGO"
              width={50}
              height={50}
            />
          </Link>

          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item fs-4">
                <Link className="nav-link" to="/">
                  Main
                </Link>
              </li>
              <li className="nav-item fs-4  ">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item fs-4 dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/about"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <Link className="dropdown-item"  to="/about">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item"  to="/about">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item"  to="/about">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

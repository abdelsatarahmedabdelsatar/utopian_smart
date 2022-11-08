import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./navBar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { langContext } from "../../context/langContext";


function NavBar() {
  const { language, setLanguage } = useContext(langContext);

  return (
    <>
      <nav
        dir={language === "العربية" ? "ltr" : "rtl"}
        className="navbar navbar-expand-lg navbar-dark fixed-top"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={process.env.PUBLIC_URL + "/images/icon.png"}
              alt="LOGO"
              width={45}
              height={45}
            />
          </Link>
           <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link color fw-bold" to='/'>
                  UTOPIAN
                </Link>
              </li>
              </ul>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main_nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" >
           
          </div>
          <div className="navbar-collapse collapse" id="main_nav" >
          <ul  className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/technical_support">
                  SUPPORT
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/apps">
                  APPS
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/services">
                  OUR SERVICES
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/packages">
                  SMART HOME PACKAGES
                </Link>
              </li>
              <li className="nav-item ">
                <button
                  className="btn btn-sm btn-danger m-2"
                  onClick={() => {
                    setLanguage(language === "العربية" ? "English" : "العربية");
                  }}
                >
                  {language}
                </button>
              </li>
            </ul>
            </div>
          </div>
        
      </nav>
    </>
  );
}

export default NavBar;

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./components/Home/home";
import NavBar from "./components/NavBar/navBar";
import About from "./components/About/about";
import ContactTech from "./components/Contact/contactTech";
import NotFounded from "./components/NotFounded/notFounded";
import SideBar from "./components/SideBar/sideBar";
import Details from "./components/Detailes/detailes";
import Problems from "./components/Services/servises";
import { LangProvider } from "./context/langContext";
import AppPage from "./components/Apps/apps";
import Packages from "./components/packages/Packages";

function App() {
  const [language, setLanguage] = useState("العربية");

  return (
    <>
      <Router>
        <LangProvider value={{ language, setLanguage }}>
          <div className="custom-shape-divider-top-1668520511">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="20 15 1200 125"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className="shape-fill"
              ></path>
                <path d="M321,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" opacity="0.45" className="shape-fill"></path>
             
            </svg>

          </div>
          <div className="main">
            <NavBar />
            <div className="faceIcon">
              <SideBar />
            </div>
            <div className="row gx-0">
              <div className="col-md-12">
                <Routes>
                  <Route index element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="services" element={<Problems />} />
                  <Route path="packages" element={<Packages />} />
                  <Route path="services/:name" element={<Details />} />
                  <Route path="apps" element={<AppPage />} />
                  <Route path="technical_support" element={<ContactTech />}>
                    <Route path=":problem" element={<ContactTech />} />
                  </Route>
                  <Route path="*" element={<NotFounded />} />
                </Routes>
              </div>
            </div>
          </div>
        </LangProvider>
      </Router>
    </>
  );
}

export default App;

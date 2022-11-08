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
import Details from './components/Detailes/detailes';
import Problems from "./components/Services/servises";
import { LangProvider } from "./context/langContext";
import AppPage from "./components/Apps/apps";
import Spinner from "./components/Spinner/spinner";
import Packages from './components/packages/Packages';

function App() {

  const [language, setLanguage] = useState('العربية')

  return (
    <>
      <Router>
        <LangProvider value = {{language, setLanguage}}  >
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

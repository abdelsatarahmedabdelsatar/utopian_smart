import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/home";
import NavBar from "./components/NavBar/navBar";
import About from "./components/About/about";
import ContactTech from "./components/Contact/contactTech";
import ContactInq from "./components/Contact/contactInq";
import NotFounded from "./components/NotFounded/notFounded";
import SideBar from "./components/SideBar/sideBar";
import Details from './components/Detailes/detailes';

function App() {
  return (
    <>
      <Router>
        <div className="main">
          <NavBar />
          <div className="row gx-0">
            <div className="col-1">
              <SideBar />
            </div>
            <div className="col-md-11">
              <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="problems/:name" element={<Details />} />
                <Route path="contactTech" element={<ContactTech />}>
                  <Route path=":problem" element={<ContactTech />} />
                </Route>
                <Route path="contactInq">
                  <Route path=":problem" element={<ContactInq />} />
                </Route>
                <Route path="*" element={<NotFounded />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;

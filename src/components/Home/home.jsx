import { useEffect, useState } from "react";
import "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./home.css";
import { db } from "../../Firebase";
import { Link } from "react-router-dom";
import Footer from "../Footer/footer";
import Spinner from "../Spinner/spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import About from "./../About/about";

function Home() {
  const [problems, setProblems] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    db.collection("problems")
      .limit(3)
      .onSnapshot((snapshot) => {
        setProblems(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
        setLoader(false);
      });
  });

  return (
    <>
      {loader ? (
        <Spinner />
      ) : (
        <div className="row gx-0 ms-2">
          <div className="p-4 row title" style={{ color: "#FFF" }}>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              className="col-md-9"
            >
              <img
                className="titleImage"
                alt="about_image"
                src={process.env.PUBLIC_URL + "/images/text2.png"}
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                mollitia error architecto Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Tempore necessitatibus cupiditate
                doloremque ipsam qui voluptatibus. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Hic mollitia error architecto
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempore necessitatibus.
              </p>
            </div>
            <div className="col-md-3">
              <img
                data-aos-duration="1000"
                data-aos="fade-left"
                className="imgLogo"
                src={process.env.PUBLIC_URL + "images/icon.png"}
                alt=""
              />
            </div>
          </div>
          <div>
            <About />
          </div>
        
          <div  data-aos="zoom-in"
                data-aos-duration="1000"
            className="categories row">
            {problems.map((p, i) => {
              return (
                <div  key={i} className="col-sm-3 mybody">
                  <Link
                    to={`services/${p.title}`}
                    className="card p-3"
                  >
                    <img className="img" src={p.gif} alt="" />
                    {/* <div
                      className="titleData"
                      style={{
                        position: "absolute",
                        color: "white",
                        bottom: "8px",
                        left: "16px",
                      }}
                    >
                    </div> */}
                  </Link>
                  <h5>{p.title}</h5>
                </div>
              );
            })}
            <div className="col-sm-3 mybody">
              <Link
                to={`/services`}
                style={{ position: "relative" }}
              >
                <FontAwesomeIcon
                  className="icon-brand icon"
                  icon={faEllipsis}
                />
              </Link>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Home;

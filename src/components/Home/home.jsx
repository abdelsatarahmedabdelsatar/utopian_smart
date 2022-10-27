import { useEffect, useState } from "react";
import "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./home.css";
import {db} from "../../Firebase";
import { Link } from 'react-router-dom';
import Footer from "../Footer/footer";
import Spinner from "../Spinner/spinner";

function Home() {
  const [problems, setProblems] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    db.collection("problems").onSnapshot((snapshot) => {
      setProblems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setLoader(false);
    });
  });
 
  return (
    <>{loader?<Spinner />:  <div className="row gx-0">
    <div
      className="p-5 row title"
      style={{ fontFamily: "cursive", color: "#FFF" }}
    >
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="col-md-7 "
      >
        <h1 >Lorem ipsum consectetur ooid</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
          mollitia error architecto Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Tempore necessitatibus cupiditate doloremque
          ipsam qui voluptatibus et quia, consequatur rerum. Architecto,
          alias dicta. Vitae laudantium sit dolores quaerat, repellendus ex
          earum? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Hic mollitia error architecto Lorem ipsum dolor sit amet
        </p>
      </div>
      <div className="col-md-4">
        <img
          data-aos-duration="1000"
          data-aos="fade-left"
          src={process.env.PUBLIC_URL+"logo.jpg"}
          style={{  }}
          alt=""
        />
      </div>
    </div>
    <hr style={{ color: "white" }} width="20%" />
    {problems.map((p,i) => {
       return (
        <div key={i} className="col-lg-auto ">
            <Link
              to={`problems/${p.title}`}
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="card border border-dark bg-dark product"
              style={{ position: "relative" }}
            >
              <img
                className="img"
                src={p.image}
                alt=""
                width={200}
                height={300}
              />
              <div
                className="data"
                style={{
                  position: "absolute",
                  color: "white",
                  bottom: "8px",
                  left: "16px",
                }}
              >
                <h4>{p.title}</h4>
                <div className="btns">
                </div>          
              </div>
            </Link>
        </div>
      );
    })}
  </div>}
    
      <Footer/>
    </>
  );
}

export default Home;

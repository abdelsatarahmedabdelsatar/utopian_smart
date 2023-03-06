import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../../Firebase";
import Spinner from "../Spinner/spinner";
import "./services.css";

function Problems() {
  const [problems, setProblems] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    db.collection("problems").onSnapshot((snapshot) => {
      setProblems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setLoader(false);
    });
  });

  return (
    <>
     {loader ? (
        <Spinner />
      ) : (
        <div className="row container gx-0">
        <div className="row gx-0 allServices">
          {problems.map((p, i) => {
            return (
              <div key={i} className="col-sm-4 mt-5">
                <Link
                  to={`${p.title}`}
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="card p-3 myServices "
                >
                  <img className="img2" src={p.gif} alt="" />
                </Link>
                <h5>{p.title}</h5>

              </div>
            );
          })}
        </div>
        </div>
      )}

    </>
  );
}

export default Problems;

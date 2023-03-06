import { db } from "../../Firebase";
import React, { useEffect, useState } from "react";
import Spinner from "../Spinner/spinner";
import "./packages.css";

function Packages() {
  const [myPackages, setPackages] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    db.collection("packages").onSnapshot((snapshot) => {
      setPackages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setLoader(false);
    });
  },[]);

  return (
    <>
      {loader ? (
        <Spinner />
      ) : (
        <div className="packages">
        <div className=" row gx-0 justify-content-center ">
          {myPackages.map((p) => {
            return (
              <React.Fragment key={p.id}>
                <div className="card myPackage m-5" style={{ width: "33vw" }}>
                  <img
                    src={p.image}
                    className="card-img-top"
                    style={{ width: "33vw", height: "30vw" }}
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.title}</h5>
                    <p className="card-text">{p.information}</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <h4>
                        {p.price.toLocaleString('en-US')}
                        {"  "}
                        <span>EGP</span>
                      </h4>
                    </li>
                  </ul>
                </div>
              </React.Fragment>
            );
          })}
        </div>
        </div>
  
      )}
      </>
  );
}

export default Packages;

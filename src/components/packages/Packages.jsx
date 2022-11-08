import { db } from "../../Firebase";
import { useEffect, useState } from "react";
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
  });

  return (
    <div className="packages">
      {loader ? (
        <Spinner />
      ) : (
        <div className=" row gx-0">
          {myPackages.map((p) => {
            return (
              <>
                <div className="col-1"></div>
                <div className="card col-5 myPackage" style={{ width: "37vw" }}>
                  <img
                    src={p.image}
                    className="card-img-top"
                    style={{ width: "37vw", height: "30vw" }}
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.title}</h5>
                    <p className="card-text">{p.information}</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <h4>
                        {p.price}
                        {"  "}
                        <span>EGP</span>
                      </h4>
                    </li>
                  </ul>
                </div>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Packages;

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../../Firebase";
import Spinner from "../Spinner/spinner";
import "./detailes.css";
import NotFounded from "../NotFounded/notFounded";
function Details() {
  const { name } = useParams();
  const [problem, setProblem] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    name
      ? db
          .collection("problems")
          .where("title", "==", name)
          .onSnapshot((snapshot) => {
            setProblem(
              snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            );
            setLoader(false);
          })
      : console.log("no problem");
    console.log(problem);
  });
  return (
    <>
      {loader ? (
        <Spinner style={{ marginButtom: "500px" }} />
      ) : problem[0] ? (
        <div style={{ marginTop: "100px" }} className="detailes">
          <div className=" m-3 p-3">
            <div className="row">
              <div className="col-1 "></div>
              <div className="col-10">
                <h1>{problem[0].title}</h1>
              </div>
            </div>
            {problem[0].images.map((q, i) => {
              return (
                <div key={i} className="row serviceDetailes mt-5">
                  <div className="col-1"></div>
                  <div className="col-3 myBorder">
                    {" "}
                    <img src={problem[0].images[i]} alt="" />
                  </div>
                  <div className="col-7 myBorder">
                    {" "}
                    <p>{problem[0].information[i]}</p>
                    <p>{problem[0].information[i]}</p>
                  </div>
                </div>
              );
            })}
            {/* <div className="row">
              <div className="col-md-6">{<img src={problem[0].image} />}</div>
              <div className="col-md-6 data">
                <h1>{problem[0].title}</h1>
                <p>{problem[0].information}</p>
                <p>{problem[0].information}</p>
                <p>{problem[0].information}</p>
                <div className="mt-5"></div>
              </div>
            </div> */}
          </div>
        </div>
      ) : (
        <NotFounded />
      )}
    </>
  );
}

export default Details;

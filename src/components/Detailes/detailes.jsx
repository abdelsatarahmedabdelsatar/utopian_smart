import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import  {db}  from "../../Firebase";
import Spinner from "../Spinner/spinner";
import './detailes.css'
function Details() {
  const { name } = useParams();
  const [problem, setProblem] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    name? db.collection("problems")
          .where("title", "==", name)
          .onSnapshot((snapshot) => {
            setProblem(
              snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            );
            setLoader(false);
          })
      : console.log("no problem");
      console.log(problem)
   
  }, []);
  return (
    <>
      {loader ? (
        <Spinner />
      ) : (
        <div style={{ padding: "70px" }} className="row gx-0 detailes">
          <div className="col-2"></div>
          <div
            className="col-12 m-3 p-3"
          >
            <div className="row">
              <div className="col-4">
                {   
                  <img
                    src={problem[0].image}
                  />
                }
              </div>
              <div className="col-6">
                <h1>{problem[0].title}</h1>
                <p>{problem[0].information}</p>
                <p>{problem[0].information}</p>
                 <Link to={`/contactTech/${problem[0].title}`} className="btn btn-success btn-md">Technical</Link>
                <Link to={`/contactInq/${problem[0].title}`} className="btn btn-danger btn-md ms-2">Inquiries</Link>
              </div>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      )}
    </>
  );
}

export default Details;

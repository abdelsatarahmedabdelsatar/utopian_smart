import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import  {db}  from "../../Firebase";
import Spinner from "../Spinner/spinner";
import './detailes.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
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
        <Spinner style={{marginButtom:'500px'}}/>
      ) : (
        <div style={{ marginTop: "100px" }} className="detailes">
          <div
            className=" m-3 p-3"
          >
            <div className="row">
              <div className="col-md-6">
                {   
                
                  <img
                    src={problem[0].image}
                  />
                }
              </div>
                <div className="col-md-6 data">
                  <h1>{problem[0].title}</h1>
                  <p>{problem[0].information}</p>
                  <p>{problem[0].information}</p>
                  <div className="mt-5">
                  {/* <Link to={`/contactTech/${problem[0].title}`} className="btn btn-primary btn-md">Technical support <FontAwesomeIcon className="detaileIcon" icon={faHeadset} /></Link> */}
                  </div>
                  
                </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Details;

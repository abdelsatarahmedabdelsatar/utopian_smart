import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./about.css";

function About() {
  return (
    <>
    <div className="row gx-0">
      <div className="about">
        <div className="front">
          <div className="contain">
          <div className="row gx-0">
            <div className="col-md-7 mycard bg-info">
              <h1>01</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam illo, exercitationem et nemo consequatur expedita
                doloribus soluta! Eius culpa, reiciendis voluptate rerum omnis
                maiores ullam quidem atque, similique iusto cum?Lorem ipsum
                m ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam illo, exercitationem et nemo consequatur expedita
                doloribus soluta! Eius culpa, reiciut
                earum sapiente ipsam odio dolores neque? Aperiam modi distinctio
                m ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam illo, exercitationem et nemo consequatur expedita
                doloribus soluta! Eius culpa, reiciut
                earum sapiente ipsam odio dolores neque? Aperiam modi 
              </p>
            </div>
            <div className="col-md-5">
             
             <img src={process.env.PUBLIC_URL+"images/2.jpg"} alt="" width='100%' style={{height:'35vw'}} />
            </div>
            <div className="col-md-5">
            <img src={process.env.PUBLIC_URL+"images/3.jpg"} alt="" width='100%' style={{height:'35vw'}} />

            
            </div>
            <div className="col-md-7 bg-mysuccess mycard">
            <h1>02</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam illo, exercitationem et nemo consequatur expedita
                doloribus soluta! Eius culpa, reiciut
                earum sapiente ipsam odio dolores neque? Aperiam modi distinctio
                at atque fuga labore, asperiores sed debitis nobis? Sint, esse?
                m ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam illo, exercitationem et nemo consequatur expedita
                doloribus soluta! Eius culpa, reiciut
                earum sapiente ipsam odio dolores neque? Aperiam modi distinctio
                m ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam illo, exercitationem et nemo consequatur expedita
                doloribus soluta! Eius culpa, reiciut
                earum sapiente ipsam odio dolores neque? Aperiam modi distinctio
                m ipsum dolor sit amet consectetur, adipisicing elit.
              </p>

            </div>
            <div className="col-md-7 mycard bg-myDanger">
              <h1>03</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam illo, exercitationem et nemo consequatur expedita
                doloribus soluta! Eius culpa, reiciendis voluptate rerum omnis
                maiores ullam quidem atque, similique iusto cum?Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Aliquam in ut
                maiores ullam quidem atque, similique iusto cum?Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Aliquam in ut
                m ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam illo, exercitationem et nemo consequatur expedita
                doloribus soluta! Eius culpa, reiciut
                earum sapiente ipsam odio dolores neque? Aperiam modi distinctio
                m ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
            <div className="col-md-5">
             
             <img src={process.env.PUBLIC_URL+"images/2.jpg"} alt="" width='100%' style={{height:'35vw'}} />
            </div>
            </div>
          </div>
          </div>
        </div>
      </div>
  
    </>
  );
}

export default About;

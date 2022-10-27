import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Spinner() {
  return (
    <>
      <div className="text-center">
        <div
          className="spinner-border text-info"
          style={{ width: "7rem", marginTop: "200px",marginBottom:'100px', height: "7rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
}

export default Spinner;

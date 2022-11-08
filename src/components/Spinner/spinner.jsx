import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './spinner.css'
function Spinner() {
  return (
    <>
      <div className="text-center">
        <div
          className=" text-info"
          role="status"
          style={{marginTop:'200px',marginBottom:'200px'}}
        >
          <img className="spinner_img" width={125} height={125} src={process.env.PUBLIC_URL + "/images/icon.png"} alt="" />
        </div>
      </div>
    </>
  );
}

export default Spinner;

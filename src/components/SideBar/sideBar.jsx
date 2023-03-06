import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
import "./sideBar.css";

function SideBar() {
  return (
    <div className="side ">
      <ul className="nav">
        <li className="nav-item">
          <div>
          <div className="back"></div>
            <a target="_blank" href="https://www.facebook.com/profile.php?id=100087335505914">
              <FontAwesomeIcon className="facebook" icon={faFacebookSquare} />
            </a>
          </div>
        </li>
        <li className="nav-item">
          <div>
            <div className="back"></div>
            <a target="_blank" href="https://api.whatsapp.com/send/?phone=%2B201033302346&text&type=phone_number&app_absent=0">
              <FontAwesomeIcon className="whatsapp" icon={faWhatsappSquare} />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;

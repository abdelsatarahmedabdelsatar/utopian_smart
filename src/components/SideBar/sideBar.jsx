import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook,faInstagram, faGoogle, faTiktok , faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import "./sideBar.css"

function SideBar() {
    return (  <div className="side">
    <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
      <li className="nav-item"><div><a href="https://www.facebook.com"><FontAwesomeIcon color="blue" icon={faFacebook}/></a></div></li>
      <li className="nav-item"><div><a href="https://www.google.com"><FontAwesomeIcon color="red"  icon={faGoogle}/></a></div></li>
      <li className="nav-item"><div><a href="https://www.twitter.com"><FontAwesomeIcon color="#06E"  icon={faTwitter}/></a></div></li>
      <li className="nav-item"><div><a href="https://www.youtube.com"><FontAwesomeIcon color="red"  icon={faYoutube}/></a></div></li>
      <li className="nav-item"><div><a href="https://www.tiktok.com"><FontAwesomeIcon color="black"  icon={faTiktok}/></a></div></li>
      <li className="nav-item"><div><a href="https://www.facebook.com"><FontAwesomeIcon color="#E32"  icon={faInstagram}/></a></div></li>
    </ul>
</div> );
}

export default SideBar;
import React from "react";
import "./apps.css";
function AppPage() {
  return (
    <>
<div className="mybody2">
<div className="row myApps gx-0">
        <div className="col-md-6 me-5"   data-aos="zoom-in"
                  data-aos-duration="1000">
          <h1>Ewlink</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ullam
            cupiditate laboriosam laudantium eos labore, quia rem, corrupti et
            deserunt praesentium. Eveniet sunt nam sed praesentium maxime facere
            libero. boriosa laudantium eos labore, quia rem, corrupti et
            deserunt praesentium Eveniet sunt nam sed praesentium maxime facere
            libero. Laboriosam eos labore, quia rem, corrupti et
            deserunt praesentium Eveniet sunt nam sed praesentium maxime facere
            libero. Laboriosam eniet sunt nam sed.
          </p>
          <div className="row myIcons">
            <span>
              <a href="https://apps.apple.com/eg/app/ewelink-smart-home/id1035163158?l=ar">
              <img
                src={process.env.PUBLIC_URL + "/images/apple.png"}
                alt="apple_image"
              />
                </a>
            </span>
            <span>
               <a href="https://play.google.com/store/apps/details?id=com.coolkit">
               <img
                src={process.env.PUBLIC_URL + "/images/android.png"}
                alt="android_image"
              />
                </a> 
            
            </span>
            {/* <div className="col-4"></div> */}
          </div>
        </div>
        <div className="col-md-5 images" data-aos="zoom-out-left"
                  data-aos-duration="1000">
          <img
            src={process.env.PUBLIC_URL + "/images/2.jpg"}
            alt="information_image"
          />
        </div>
      </div>
      <div className="row myApps gx-0">
        <div className="col-md-6 me-5"  data-aos="zoom-in"
                  data-aos-duration="1000">
          <h1>Smart Life</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ullam
            cupiditate laboriosam laudantium eos labore, quia rem, corrupti et
            deserunt praesentium. Eveniet sunt nam sed praesentium maxime facere
            libero. boriosa laudantium eos labore, quia rem, corrupti et
            deserunt praesentium Eveniet sunt nam sed praesentium maxime facere
            libero. Laboriosam eos labore, quia rem, corrupti et
            deserunt praesentium Eveniet sunt nam sed praesentium maxime facere
            libero. Laboriosam eniet sunt nam sed.
          </p>
          <div className="row myIcons">
            <span>
              <a href="https://apps.apple.com/eg/app/smart-life-smart-living/id1115101477?l=ar">
              <img
                src={process.env.PUBLIC_URL + "/images/apple.png"}
                alt="apple_image"
              />
                </a>
            </span>
            <span>
               <a href="https://play.google.com/store/apps/details?id=com.tuya.smartlife">
               <img
                src={process.env.PUBLIC_URL + "/images/android.png"}
                alt="android_image"
              />
                </a> 
            
            </span>
          </div>
        </div>
        <div className="col-md-5 images"data-aos="zoom-out-left"
                  data-aos-duration="1000">
          <img
            src={process.env.PUBLIC_URL + "/images/3.jpg"}
            alt="information_image"
          />
        </div>
      </div>
      <div className="row myApps gx-0">
        <div className="col-md-6 me-5" data-aos="zoom-in"
                  data-aos-duration="1000">
          <h1>Tuya</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ullam
            cupiditate laboriosam laudantium eos labore, quia rem, corrupti et
            deserunt praesentium. Eveniet sunt nam sed praesentium maxime facere
            libero. boriosa laudantium eos labore, quia rem, corrupti et
            deserunt praesentium Eveniet sunt nam sed praesentium maxime facere
            libero. Laboriosam eos labore, quia rem, corrupti et
            deserunt praesentium Eveniet sunt nam sed praesentium maxime facere
            libero. Laboriosam eniet sunt nam sed.
          </p>
          <div className="row myIcons">
            <span>
              <a href="https://apps.apple.com/eg/app/tuya-smart/id1034649547?l=ar">
              <img
                src={process.env.PUBLIC_URL + "/images/apple.png"}
                alt="apple_image"
              />
                </a>
            </span>
            <span>
               <a href="https://play.google.com/store/apps/details?id=com.tuya.smart">
               <img
                src={process.env.PUBLIC_URL + "/images/android.png"}
                alt="android_image"
              />
                </a> 
            
            </span>
          </div>
        </div>
        <div className="col-md-5 images"  data-aos="zoom-out-left"
                  data-aos-duration="1000">
          <img
            src={process.env.PUBLIC_URL + "/images/2.jpg"}
            alt="information_image"
          />
        </div>
      </div>
</div>
      
    </>
  );
}

export default AppPage;

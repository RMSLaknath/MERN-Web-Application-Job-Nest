import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved.</div>
      <div>
        <Link to={"https://www.facebook.com/KotelawalaDefenceUniversity/"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://www.youtube.com/channel/UC3pp0YuDK7eXDJl6VPArYpA"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"https://lk.linkedin.com/school/general-sir-john-kotelawala-defence-university/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/explore/locations/342478929/general-sir-john-kotelawala-defence-university/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
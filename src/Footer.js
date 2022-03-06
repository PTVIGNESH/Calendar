import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThumbsUp  } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import "./footer.css";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
    
    
       <div className="content">
         <FontAwesomeIcon className="facebook" icon={ faFacebookF} />
         <FontAwesomeIcon className="github" icon={ faGithub} />
         <FontAwesomeIcon className="linkedin" icon={ faLinkedin} />
        
     </div>
     
      <p className="copyright" >Copyright ⓒ {year} </p>
    
   </div>
  );
}

export default Footer;

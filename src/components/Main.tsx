import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterInIcon from '@mui/icons-material/Twitter';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import '../assets/styles/Main.scss';
import profileImage from '../assets/images/profile.jpeg';


function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profileImage} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/FranFigueroa" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/franco-figueroa-575696193/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://x.com/_FranFigueroa_" target="_blank" rel="noreferrer"><TwitterInIcon/></a>
          </div>
          <h1>Fran Figueroa</h1>
          <p>Software Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/FranFigueroa" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/franco-figueroa-575696193/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://x.com/_FranFigueroa_" target="_blank" rel="noreferrer"><TwitterInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
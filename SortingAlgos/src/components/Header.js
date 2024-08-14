import React,{useState,useEffect} from 'react';
import { BsLinkedin } from 'react-icons/bs' // importing icons from the react-icons library
import { FaGithub } from 'react-icons/fa'
import { SiLeetcode } from "react-icons/si";
import './Header.css';

function Header() {

  const [showHeaderBar, setShowHeaderBar] = useState(true);

  const contactHandler = () => {
    setShowHeaderBar(!showHeaderBar);
  }

  return (
    <div className="header">
      <div id="header__bar" style = {{transform: showHeaderBar? `translateY(120px)`: `translateY(0px)`}}>
        <h3 className="header__bar__title">Ajmat Kathat</h3>
        <div className="header__bar__icons" style={{display: 'flex', gap: '20px'}}>
          <a href="ttps://linkedin.com/in/ajmat-kathat-0a5b45252" target='_blank'><BsLinkedin style={{color: 'white'}} className="about-icon" /></a>
          <a href="https://github.com/ajmat6" target='_blank'><FaGithub style={{color: 'white'}} className="about-icon" /></a>
          <a href="https://www.leetcode.com/u/ajmat6" target='_blank'><SiLeetcode style={{color: 'white'}} /></a>
        </div>
      </div>

      <div className="header-logo" style={{fontFamily:'Poppins, sans-serif'}}>SortTheAlgos</div>
      <div className="header__options">
         <h3 className="header__option" onClick = {contactHandler}>Contact Me!</h3>
      </div>
   </div>
  )
}

export default Header;
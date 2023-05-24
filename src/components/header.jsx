//import './header.css'
//mport ReactDOM from 'react-dom'

import VideoCarousel from "./videoCarousel";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
//import ReactPlayer from "react-player";
//import video from "../video/mix.mp4";

//import Carousel from 'react-bootstrap/Carousel';
//import {faTwitter} from '@fortawesome/free-solid-svg-icons'
function Header() {
  
  return (
    <>
      <header>
        <a href="#" className="brand">
          Travel
        </a>
        <div className="navigation">
          <div className="navigation-items">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Explore</a>
            <a href="#">Gallery</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </header>
      
      <section className="home">
        <VideoCarousel />
      </section>
    </>
  );
}

export default Header;

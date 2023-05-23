//import './header.css'
//mport ReactDOM from 'react-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player";
import video from "../video/mix.mp4";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
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
      <Carousel className="carousel">
      <Carousel.Item> 
      <ReactPlayer 
          url={video}
          playing={true}
          loop={true}
          muted={true}
      />  
        <Carousel.Caption>
  
 
        <div className="content">

          <h1>
            Wonderful.<br></br>
            <span>Marruecos</span>
          </h1>
          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen.
          </p>
          <a href="#">Read more</a>
          {/*         <div className="media-icons">
            <FontAwesomeIcon icon={faCircleUser} />
            <FontAwesomeIcon icon={faCircleUser} />
            <FontAwesomeIcon icon={faCircleUser} />
          </div>
           */}
 
        </div>
        </Carousel.Caption>
        </Carousel.Item>

        </Carousel>
      </section>
    </>
  );
}

export default Header;

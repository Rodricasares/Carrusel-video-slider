import './videoCarousel.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import ReactPlayer from "react-player";
import video from "../video/mix.mp4";
import video1 from "../video/casaBlanca.mp4";
import video2 from "../video/chaouen.mp4";
import video3 from "../video/Fez.mp4";

function VideoCarousel() {
  const videoInfo = [
    {
      id: 0,
      title: "Marruecos",
      src: video,
      credit: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    },
    {
      id: 1,
      title: "Casa Blanca",
      src: video1,
      credit: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ",
    },

    {
      id: 2,
      title: "Chaouen",
      src: video2,
      credit: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    },

    {
      id: 3,
      title: "Fez",
      src: video3,
      credit: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    },
  ];
  return (
    <section >
      <Carousel>
        {videoInfo.map((videoProp) => {
          return (
            <Carousel.Item key={videoProp.id}>
              <ReactPlayer
                url={videoProp.src}
                playing={true}
                pip={true}
                loop={true}
                muted={true}
              
              />
              <Carousel.Caption>
                <div className='container_carousel'>
                <h1 className='titleCarousel'>{videoProp.title}</h1>
                <h2 className='titleCarousel1'>{videoProp.title}</h2>
                <p className='description' >{videoProp.credit}</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}
export default VideoCarousel;

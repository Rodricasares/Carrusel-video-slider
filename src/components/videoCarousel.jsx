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
      credit: "Disfruta de las esencias de Marruecos",
    },
    {
      id: 1,
      title: "Casa Blanca",
      src: video1,
      credit: "Casa Blanca ...",
    },

    {
      id: 2,
      title: "Chaouen",
      src: video2,
      credit: "Una maravilla en las Montañas",
    },

    {
      id: 3,
      title: "Fez",
      src: video3,
      credit: "Su medina la más grande del mundo",
    },
  ];
  return (
    <div className="">
      <Carousel>
        {videoInfo.map((videoProp) => {
          return (
            <Carousel.Item key={videoProp.id}>
              <ReactPlayer
                url={videoProp.src}
                playing={true}

                loop={true}
                muted={true}
              />
              <Carousel.Caption>
                <h3>{videoProp.title}</h3>
                <p>{videoProp.credit}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
export default VideoCarousel;

import "../components/card.css";
import { BsCarFrontFill } from "react-icons/bs";
import { ImMap2 } from "react-icons/im";
import { MdLocalHotel } from "react-icons/md";
import { BiRestaurant } from "react-icons/bi";
import { GiCamel } from "react-icons/gi";

function Card() {
  const tourCard = [
    {
      id: 0,
      title: "Marruecos",
      img: "http://www.marruecostrip.com/wp-content/uploads/2019/07/Merzouga-desert.jpg",
      credit:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
    },
    {
      id: 1,
      title: "Fez",
      img: "http://www.marruecostrip.com/wp-content/uploads/2019/07/Fes-city.jpg",
      credit:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
    },
    {
      id: 2,
      title: "Imagen",
      img: "http://www.marruecostrip.com/wp-content/uploads/2019/07/de8dded6ddd3f2e148bca6e8521f6281.jpg",
      credit:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
    },
  /*  {
      id: 3,
      title: "Imagen",
      img: "https://images.hola.com/imagenes/viajes/20200109157751/chaouen-marruecos-pueblo-azul/0-766-669/pueblo-marruecos-azul-a.jpg",
      credit:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
    },*/
  ];
  return (
    <section>
      <div className="container">
        {tourCard.map((tourCardProp) => {
          return (
            <div className="card" key={tourCardProp.id}>
              <img src={tourCardProp.img} />
              <div className="wave w1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" >
                  <path
                    fill="#E88456"
                    opacity="1"
                    d="M0,160L48,138.7C96,117,192,75,288,48C384,21,480,11,576,37.3C672,64,768,128,864,154.7C960,181,1056,171,1152,170.7C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                  ></path>
                </svg>

                <div className="info_card">
                  <h3>{tourCardProp.title}</h3>
                  <p>{tourCardProp.credit}</p>
                  <div className="iconCard">
                   
                    
                    <BsCarFrontFill className="icon" /> <ImMap2 className="icon" /> <BiRestaurant className="icon" />{" "}
                    <MdLocalHotel className="icon" /> <GiCamel className="icon" />
                
                  </div>
                  <button>Más info</button>
                </div>
              </div>{" "}
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Card;

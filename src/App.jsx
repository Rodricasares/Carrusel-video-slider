import "./App.css";
import Banner from "./components/banner";
import BannerOne from "./components/bannerOne";
import Header from "./components/header";
import VideoCarousel from "./components/videoCarousel";
import Card from "./components/card";
import Footer from "./components/footer";

function App() {
  return (
    <div className="marroco">
      <div>
        <Header />
      </div>
      <div>
        <VideoCarousel />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <h1 className="tourstitle">Nuestros tours</h1> <Card />
      </div>
      <div>
        <BannerOne />
      </div>
      <div>
        <h1 className="tourstitle">Nuestras excursiones</h1> <Card />
      </div>
      <div><Footer /></div>
    </div>
  );
}

export default App;

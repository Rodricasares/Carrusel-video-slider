import "./App.css";
import Banner from "./components/banner";
import Header from "./components/header";
import VideoCarousel from "./components/videoCarousel";
import  Card  from "./components/card";


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
        <h1 className="tourstitle">Nuestros tours
</h1>        <Card />
      </div>
    </div>
  );
}

export default App;

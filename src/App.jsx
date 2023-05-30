import "./App.css";
import Banner from "./components/banner";
import Header from "./components/header";
import VideoCarousel from "./components/videoCarousel";

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
    </div>
  );
}

export default App;

import "./App.css";
import useScroll from "./services/useScroll";
import Home from "./components/Home";
import Work from "./components/Work";
import Pointer from "./components/Pointer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DataProvider from "./Store/DataProvider";

const timing = 400;
export default function App() {
  const { transform, counter, setCounter } = useScroll("#swiper", timing, ".slide");

  return (
    <DataProvider>
      <div className="App">
        <Header transform={transform} />
        <div id="swiper" style={{ transitionDuration: timing * 3 + "ms" }}>
          <Home index={0} />
          <Work index={1} counter={counter} setCounter={setCounter} />
        </div>
        <Footer />
        <Pointer multiplier={2} />
      </div>
    </DataProvider>
  );
}

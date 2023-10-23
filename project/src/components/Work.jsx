import "./Work.css";
import Carousel from "./Carousel";
import { useEffect, useState } from "react";

export default function Work({ counter, index, setCounter, winHeight }) {
  const [render, setRender] = useState(false);
  useEffect(() => {
    if (counter == index && !render) {
      setRender(true);
      console.log("render carousel",1);
    }
  }, [counter]);

  return <div className="slide work"  style={{height: winHeight + "px"}}>{render && <Carousel setCounter={setCounter} counter={counter} />}</div>;
}

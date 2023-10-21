import { useContext, useState } from "react";
import { DataContext } from "../Store/data-context";
import Slide from "./Slide";
import classes from "./Carousel.module.css";
import ArrowLeft from "./Icons/ArrowLeft";
import ArrowRight from "./Icons/ArrowRight";

export default function Carousel() {
  const data = useContext(DataContext);
  const [counter, setCounter] = useState(0);
  const max = data.gallery.length - 1;
  // todo scroll carouse using wheel and disable use scroll while doing that and vice-versa

  function next() {
    if (counter < max) return setCounter(counter + 1);
    setCounter(max);
  }

  function prev() {
    if (counter <= 0) return setCounter(0);
    setCounter(counter - 1);
  }

  return (
    <>
      <div className={classes.carousel} style={{ transform: `translate3d(calc(-${counter}00% - ${counter}0px), 0px, 0px)` }}>
        {data.gallery.sort((a,b)=> a.order - b.order).map((item, index) => (
          <Slide key={index} item={item} />
        ))}
      </div>
      <div className={classes.controls}>
        <button type="button" className="interact" onClick={prev}>
          <ArrowLeft />
          Prev
        </button>
        <button type="button" className="interact" onClick={next}>
          Next
          <ArrowRight />
        </button>
      </div>
    </>
  );
}

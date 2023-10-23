import { useContext, useEffect, useState } from "react";
import { DataContext } from "../Store/data-context";
import Slide from "./Slide";
import classes from "./Carousel.module.css";
import ArrowLeft from "./Icons/ArrowLeft";
import ArrowRight from "./Icons/ArrowRight";

export default function Carousel() {
  const data = useContext(DataContext);
  const [counter, setCounter] = useState(0);
  const [, setIsDown] = useState(false);
  const [, setY] = useState(0);
  const [, setX] = useState(0);
  const max = data.gallery.length - 1;
  const timing = 400;

  // useEffect(() => {
  //   console.log("carousel:", xCounter);
  //   const swiper = document.querySelector("#swiper");
  //   swiper.style.transform = "none";
  //   setCounter(1);
  // }, [xCounter]);

  function next() {
    if (counter < max) return setCounter(counter + 1);
    setCounter(max);
  }

  function prev() {
    if (counter <= 0) return setCounter(0);
    setCounter(counter - 1);
  }

  function removeEventListener() {
    window.removeEventListener("touchmove", pointerMove);
    window.removeEventListener("touchstart", pointerDown);
    window.removeEventListener("touchend", pointerUp);
    window.removeEventListener("wheel", detectScroll, { passive: false });
  }

  function addEventListener() {
    window.addEventListener("touchmove", pointerMove);
    window.addEventListener("touchstart", pointerDown);
    window.addEventListener("touchend", pointerUp);
    window.addEventListener("wheel", detectScroll, { passive: false });
  }

  const pointerUp = () => {
    setIsDown(false);
    setX(null);
    setY(null);
  };

  function pointerDown(e) {
    let x = 0;
    let y = 0;
    if (e.type.includes("mouse")) {
      x = e.clientX;
      y = e.clientY;
    } else {
      x = Math.round(e.touches[0].clientX);
      y = Math.round(e.touches[0].clientY);
    }
    setIsDown(true);
    setX(x);
    setY(y);
  }

  function pointerMove(e) {
    setIsDown(prevState => {
      if (prevState) {
        const isMouse = e.type.includes("mouse");
        let x2 = 0;
        let y2 = 0;
        if (isMouse) {
          x2 = e.clientX;
          y2 = e.clientY;
        } else {
          x2 = Math.round(e.touches[0].clientX);
          y2 = Math.round(e.touches[0].clientY);
        }
        setY(y1 => {
          setX(x1 => {
            let dx = x2 - x1;
            dx = dx < 0 ? dx * -1 : dx;
            // console.warn("dx:", dx);

            const threshold = !isMouse ? 6 : 1;
            // console.log("threshold:", threshold);

            if (dx >= 0 && dx <= threshold) {
              if (y1 == null || x1 == null) return;
              // todo fix below detectScroll(-1)  get invoked by single mouse click
              if (y1 > y2) {
                // console.log("pointerMove to: down");
                detectScroll({ deltaY: 1 });
              } else {
                // console.log("pointerMove to: up");
                detectScroll({ deltaY: -1 });
              }
            }
          });
        });
      }
    });
  }

  function detectScroll(e) {
    removeEventListener();

    if (e.deltaY > 0) {
      setCounter(prev => {
        console.log("down");
        if (prev < max) return prev + 1;
        return max;
      });
      setTimeout(addEventListener, timing);
    } else {
      setCounter(prev => {
        console.log("up");
        if (prev <= 0) return 0;
        return prev - 1;
      });
      setTimeout(addEventListener, timing);
    }
  }

  // useEffect(() => {
  //   addEventListener();
  //   return () => removeEventListener();
  // }, []);

  // useEffect(() => {
    // const work = document.querySelector("#swiper .slide.work");
    // const swiper = document.querySelector("#swiper");
    // if (work && work.classList.contains("current")) {
    //   swiper.style.transform = "none";
    //   console.log("work is current view");
    // }
  // }, [counter]);

  return (
    <>
      <div className={classes.carousel} style={{ transform: `translate3d(calc(-${counter}00% - ${counter}0px), 0px, 0px)` }}>
        {data.gallery
          .sort((a, b) => a.order - b.order)
          .map((item, index) => (
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

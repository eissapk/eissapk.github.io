/*
On the same horizontal line: y1 == y2
On the same vertical line: x1 == x2
On the same positive slope diagonal: y2 - y1 == x2 - x1
On the same negative slope diagonal: y2 - y1 == x1 - x2

const dy = y2 - y1;
const dx = x2 - x1;
if (dx == 0 || dy == 0 || dx == dy || dx == -dy) {
  // match!
}
*/

import { useState, useEffect } from "react";
export default function useScroll(selector = "#swiper", timing = 1200, slide = ".slide") {
  let wrapper = document.querySelector(selector);
  const [counter, setCounter] = useState(0);
  const [, setIsDown] = useState(false);
  const [, setY] = useState(0);
  const [, setX] = useState(0);

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

  function removeEventListener() {
    // mouse
    // window.removeEventListener("mousemove", pointerMove);
    // window.removeEventListener("mousedown", pointerDown);
    // window.removeEventListener("mouseup", pointerUp);
    // touch
    window.removeEventListener("touchmove", pointerMove);
    window.removeEventListener("touchstart", pointerDown);
    window.removeEventListener("touchend", pointerUp);
    // wheel
    window.removeEventListener("wheel", detectScroll, { passive: false });
    console.log("removeEventListener");
  }
  function addEventListener() {
    // mouse
    // window.addEventListener("mousemove", pointerMove);
    // window.addEventListener("mousedown", pointerDown);
    // window.addEventListener("mouseup", pointerUp);
    // touch
    window.addEventListener("touchmove", pointerMove);
    window.addEventListener("touchstart", pointerDown);
    window.addEventListener("touchend", pointerUp);
    window.addEventListener("wheel", detectScroll, { passive: false });
    console.log("addEventListener");
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
    if (!wrapper.querySelectorAll(slide).length) return console.warn("No " + slide + " exist");
    let max = wrapper.querySelectorAll(slide).length - 1;
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

  const transform = (num, elm) => {
    let ul = null;
    if (elm) {
      ul = elm.parentElement.parentElement;
    } else {
      ul = document.querySelector("header ul");
    }

    // handle links
    const links = ul.querySelectorAll("a");
    links.forEach(link => link.classList.remove("active"));
    if (elm) elm.classList.add("active");
    else if (links[num]) links[num].classList.add("active");

    // scroll
    wrapper.style.transform = `translate3d(0px, -${num}00vh, 0px)`;
  };

  useEffect(() => {
    wrapper = document.querySelector(selector);
    addEventListener();
    return () => removeEventListener();
  }, []);

  useEffect(() => {
    transform(counter);
  }, [counter]);

  return transform;
}

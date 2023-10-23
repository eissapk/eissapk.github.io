import Info from "./Info";
import Image from "./Image";
import classes from "./Home.module.css";
import { useEffect, useState } from "react";

export default function Home(props) {
  const [winHeight, setWinHeight] = useState(window.innerHeight);
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const handleSize = () => {
    setWinHeight(window.innerHeight);
    setWinWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return (
    <div className={`slide current ${classes.home}`} style={{height: props.winHeight + "px"}}>
      <div className={classes["inner-home"]}>
        <Info />
        {((winHeight >= 500 && winWidth >= 769) || winHeight >= 810) && <Image />}
      </div>
    </div>
  );
}

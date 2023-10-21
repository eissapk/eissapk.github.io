import classes from "./Image.module.css";
import headshot from "../assets/headshot.webp";

export default function Image() {
  return (
    <>
      <div className={classes.image} >
        <img src={headshot} alt="headshot of website owner" />
      </div>
    </>
  );
}

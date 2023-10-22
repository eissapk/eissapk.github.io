import classes from "./Image.module.css";
import headshot from "../assets/headshot.webp";

export default function Image() {
  return (
    <>
      <div className={classes.image} >
        <img width={250} height={250} src={headshot} alt="headshot of website owner" />
      </div>
    </>
  );
}

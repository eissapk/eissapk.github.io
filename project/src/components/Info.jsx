import classes from "./Info.module.css";
import Contact from "./Icons/Contact";
import Download from "./Icons/Download";
import ArrowDown from "./Icons/ArrowDown";
import { useContext } from "react";
import { DataContext } from "../Store/data-context";
import resume from "../assets/resume.pdf"

export default function Info() {
  const data = useContext(DataContext);
  return (
    <div className={classes.info}>
      <h1>{data.name}</h1>
      <h2>{data.job}</h2>
      <p>{data.desc}</p>
      <div>
        <a href={`mailto:${data.btns.contact.mail}`} className="interact">
          {data.btns.contact.text}
          <Contact />
        </a>
        <a href={resume} download={`${data.btns.resume.fileName}.pdf`} className="interact">
          {data.btns.resume.text}
          <Download />
        </a>
      </div>
      <span>
        <em></em>
        {data.btns.scroll}
        <ArrowDown />
      </span>
    </div>
  );
}

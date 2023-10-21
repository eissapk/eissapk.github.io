import { useState } from "react";
import "./Header.css";
const links = ["Home", "Work"];

export default function Header(props) {
  const [index, setIndex] = useState(0);
  const navigate = (ind, e) => {
    setIndex(ind);
    props.transform(ind, e ? e.target : null);
  };

  return (
    <header>
      <div className="header-inner-wrapper">
        <a className="interact logo" href="#" onClick={navigate.bind(null, 0, null)}>
          Eissa
        </a>
        <ul>
          {links.map((item, ind) => (
            <li key={ind}>
              <a className={`interact ${ind == index ? "active" : ""}`} href="#" onClick={navigate.bind(null, ind)}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

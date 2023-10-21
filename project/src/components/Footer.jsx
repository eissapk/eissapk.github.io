import Email from "./Icons/Email";
import Github from "./Icons/Github";
import Linkedin from "./Icons/Linkedin";
import Phone from "./Icons/Phone";
import Stackoverflow from "./Icons/Stackoverflow";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="inner-wrapper">
        <ul>
          <li>
            <a className="interact" href="https://linkedin.com/in/eissapk/" target="_blank" rel="noopener">
              <Linkedin />
            </a>
          </li>
          <li>
            <a className="interact" href="mailto:eissapk44@gmail.com" target="_blank" rel="noopener">
              <Email />
            </a>
          </li>
          <li>
            <a className="interact" href="https://api.whatsapp.com/send?phone=201069431363" target="_blank" rel="noopener">
              <Phone />
            </a>
          </li>
          <li>
            <a className="interact" href="https://github.com/eissapk" target="_blank" rel="noopener">
              <Github />
            </a>
          </li>
          <li>
            <a className="interact" href="https://stackoverflow.com/u/12641569" target="_blank" rel="noopener">
              <Stackoverflow />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

import classes from "./Slide.module.css";
import Link from "./Icons/Link"
import Code from "./Icons/Code"

export default function Slide(props) {
  let charsLimit = 70;
  function trim(text) {
    if (text.length > charsLimit) return text.slice(0, charsLimit) + "...";
    return text
  }
  return (
    <div className={classes.slide}>
      <article>
        <img src={props.item.thumbnail} alt={props.item.title} />
        <h1>{trim(props.item.title)}</h1>
        <p>{props.item.date}</p>
        <ul>
          <li>
            <a className="interact" href={props.item.links.demo} target="_blank">
              <Link/>
              Demo
            </a>
          </li>
          <li>
            <a className="interact" href={props.item.links.code} target="_blank">
              <Code/>
              Code
            </a>
          </li>
        </ul>
      </article>
    </div>
  );
}

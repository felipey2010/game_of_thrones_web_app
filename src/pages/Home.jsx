import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <ul className="list-ul">
        <li>
          <Link to="/got_houses">Game of Thrones Houses</Link>
        </li>
        <li>
          <Link to="/got_quotes">Game of Thrones Quotes</Link>
        </li>
        <li>
          <Link to="/youtube">YouTube</Link>
        </li>
      </ul>
    </div>
  );
}

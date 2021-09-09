import { Link } from "react-router-dom";
import House from "../components/got/House";
import useFetch from "../hooks/useFetch";

export default function GOTPage() {
  const { data, setData } = useFetch();
  return (
    <div className="got-page">
      <Link to="/">Back</Link>
      <main>
        <input
          className="searchBox"
          type="search"
          placeholder="Type your favorite house"
          value={data.slug}
          onChange={e => setData({ ...data, slug: e.target.value })}
        />
        <br />
        {data.results.length > 0 ? (
          <House family={data.results[0]} />
        ) : (
          <div>No search data...</div>
        )}
      </main>
    </div>
  );
}

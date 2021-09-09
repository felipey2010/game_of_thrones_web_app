import { useState, useEffect } from "react";

export default function SearchBar({ onSearchTermChange }) {
  const [data, setData] = useState({
    term: "",
    results: [],
  });

  function handleChange(value) {
    setData({ ...data, term: value });
  }

  useEffect(() => {
    if (data.term !== "") {
      const timeoutId = setTimeout(() => {
        onSearchTermChange(data.term);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.term]);

  return (
    <div className="search_bar">
      <input
        type="search"
        placeholder="Search YouTube"
        value={data.term}
        onChange={e => handleChange(e.target.value)}
      />
    </div>
  );
}

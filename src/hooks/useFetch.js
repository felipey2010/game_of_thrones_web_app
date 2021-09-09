import { useState, useEffect } from "react";

import got from "../api/got";

const useFetch = () => {
  const [data, setData] = useState({
    slug: "",
    results: [],
  });

  useEffect(() => {
    if (data.slug !== "") {
      const timeoutId = setTimeout(() => {
        const fetch = async () => {
          try {
            const res = await got.get(`/${data.slug.toLowerCase()}`);
            setData({ ...data, results: res.data });
          } catch (err) {
            console.error(err);
          }
        };
        fetch();
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.slug]);

  return { data, setData };
};

export default useFetch;

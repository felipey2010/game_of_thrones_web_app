import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function GotQuotes() {
  const [quote, setQuote] = useState({
    sentence: "",
    character: "",
    house: "",
  });

  async function getQuote() {
    await axios
      .get("https://game-of-thrones-quotes.herokuapp.com/v1/random")
      .then(result => {
        setQuote({
          sentence: result.data.sentence,
          character: result.data.character.name,
          house: result.data.character.house.name,
        });
        localStorage.setItem("gotQuote", JSON.stringify(result.data));
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    var storedQuote = JSON.parse(localStorage.getItem("gotQuote"));
    if (storedQuote != null && quote.sentence.length === 0) {
      setQuote({
        sentence: storedQuote.sentence,
        character: storedQuote.character.name,
        house: storedQuote.character.house.name,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="quote-container position-relative">
      <Link to="/">Back</Link>
      <button
        type="button"
        className="position-absolute top-0 start-50 translate-middle btn btn-primary"
        onClick={() => getQuote()}>
        Get Random Quote
      </button>
      <div className="container  ">
        {quote.sentence.length > 0 && (
          <div className="position-absolute top-50 start-50 translate-middle card">
            <div className="card-body">
              <h4 className="card-text">
                <strong>
                  "<em>{quote.sentence}</em>"
                </strong>
              </h4>
              <p className="card-text">
                <small className="text-muted">
                  {quote.character} - {quote.house}
                </small>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

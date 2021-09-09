import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import GOTPage from "./pages/GOT_Page";
import YoutubePage from "./pages/Youtube";
import Page404 from "./pages/Page404";
import GotQuotes from "./pages/GOT_Quotes";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />{" "}
        </Route>
        <Route path="/got_houses">
          <GOTPage />{" "}
        </Route>
        <Route path="/youtube">
          <YoutubePage />{" "}
        </Route>
        <Route path="/got_quotes">
          <GotQuotes />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </Router>
  );
}

import { useState } from 'react';
import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";

import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import StopDetails from "./components/StopDetails";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState("");

  const handleQueryChange = event => setSearchQuery(event.target.value);
  const onClickSearch = () => {
    let url = `https://v5.vbb.transport.rest/locations?query=${searchQuery}`;
    fetch(url).then(response => response.json())
              .then(data => setResults(data));
    // setSearchQuery("");
  };

  return (
    <HashRouter basename="https://henokhm.github.io/vbb-transport-deploy/">
      <div className="App">
        <Switch>
            <Route exact path="/">
              <SearchBar
              searchQuery={searchQuery}
              handleQueryChange={handleQueryChange}
              onClickSearch={onClickSearch}
              />
              <SearchResults results={results} />
            </Route>
            <Route path="/stop_details/:id">
              <StopDetails />
            </Route>
          </Switch>
      </div>
    </HashRouter>
  );
}

export default App;

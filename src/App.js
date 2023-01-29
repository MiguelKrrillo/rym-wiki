/*import "./App.css";

import imageRickMorty from "./Images/rick-morty.png";
import imageLogo from "./Images/Logo.png";

import { useEffect, useState } from "react";
import Characters from "./Components/Characters";
import Filter from "./Components/Filter";

function App() {
  let [characters, setCharacters] = useState(null);
  let [pageNumber, setPageNumber] = useState(1);

  let {info, results} = characters

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setCharacters(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <img src={imageLogo} alt="Rick & Morty Logo" className="img-home" width="500px"/>
      <img src={imageRickMorty} alt="Rick & Morty" className="img-home" width="300px"/>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filter />
          </div>
          <div className="col-8"></div>
        </div>
      </div>
    </div>
  );
}

export default App;*/


import imageRickMorty from "./Images/rick-morty.png";
import imageLogo from "./Images/Logo.png";

import "./App.css";

import { useState } from "react";
import Characters from "./Components/Characters";

function App() {
  const [characters, setCharacters] = useState(null);
  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");

    const charactersApi = await api.json();
    setCharacters(charactersApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
      <img src={imageLogo} alt="Rick & Morty Logo" className="img-home" width="500px"/>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={imageRickMorty} alt="Rick & Morty" className="img-home" width="300px"/>
            <button onClick={reqApi} className="btn-search">
              Buscar personajes
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
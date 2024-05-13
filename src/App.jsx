import React, { useState, useEffect } from "react";
import "../src/styles/App.css";
import Card2 from "./components/Card2";
import SearchBar from "./components/SearchBar";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://www.amiiboapi.com/api/amiibo/?character=${search}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.amiibo);
        setFilteredCharacters(data.amiibo);
      })
      .catch((err) => console.error(err));
  }, [search]);

  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
  };

  return (
    <section>
      <SearchBar onSearch={handleSearch} setSearch={setSearch}/>
      <Card2 characters={filteredCharacters} />
    </section>
  );
}

export default App;
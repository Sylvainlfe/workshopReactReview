import "../styles/searchBar.css"

function SearchBar({ characters, setFilteredCharacters, setSearch }) {

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const searchedCharacters = characters.filter((character) => {
      return (
        character.name.toLowerCase().includes(value) ||
        character.gameSeries.toLowerCase().includes(value) ||
        character.amiiboSeries.toLowerCase().includes(value) 
      );
    });

    setFilteredCharacters(searchedCharacters);
  };

  return (
    <section className="containSearch">
      <section className="containSearchBar">
        <input
          type="text"
          className="searchBar"
          id="searchBar"
          placeholder="Rechercher"
          onChange={handleSearch}
        />
      </section>
    </section>
  );
}

export default SearchBar;
import search_icon from "./../icons/a.png"

function SearchBar(props) {
   return (
    <div className="searchDiv">
      <input
        value={props.searchQuery}
        onChange={props.handleQueryChange}
        onKeyPress={event => {
          if (event.key === 'Enter') {
            props.onClickSearch();
          }
        }}
        className="searchInput"
        type="search"
        name="searchQuery"
        aria-label="Search stops"
        placeholder="Search stops..."
        onFocus={(e) => e.target.placeholder = ""}
        onBlur={(e) => e.target.placeholder = "Search stops..."}

      />
      <button className="searchButton" 
        onClick={props.onClickSearch}
      >
          <img src={search_icon} alt="Search Icon" />
      </button>
    </div>
  )
}

export default SearchBar;
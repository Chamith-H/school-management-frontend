import "../../styles/shared/SearchBar.css";
import { useState } from "react";

const SearchBar = (props: any) => {
  const [search, setSearch] = useState("");

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    props.SearchedQuery(search);
  };

  return (
    <div className="Search-Bar">
      <form onSubmit={submitSearch}>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type="submit">
          <i className="bi bi-search"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

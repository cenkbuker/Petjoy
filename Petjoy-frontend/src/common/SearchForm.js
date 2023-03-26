import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm({ searchFor }) {

  const [searchTerm, setSearchTerm] = useState("");


  function handleSubmit(e) {

    e.preventDefault();
    searchFor(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  }

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
      <div className="SearchForm mb-4">
        <form className="form-inline formLayout" onSubmit={handleSubmit}>
          <input
              className="form-control form-control-lg flex-grow-1"
              name="searchTerm"
              placeholder="Enter search term.."
              value={searchTerm}
              onChange={handleChange}
          />
          <button type="submit" className="btn btn-lg btn-secondary m-1">
            Submit
          </button>
        </form>
      </div>
  );
}

export default SearchForm;

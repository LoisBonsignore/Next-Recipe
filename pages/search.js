import React, { useState, useEffect } from "react";

const Search = ({ recipe }) => {
  const [search, setSearch] = useState(null);
  const [data, setData] = useState(null);

  function getData() {
    fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => {
        return res.json();
      })
      .then((resObject) => {
        setData(resObject);
        console.log("resObject", data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    console.log("search", search);
  }, [search]);

  const handleInput = (setter, e) => {
    setter(e.target.value);
  };

  return (
    <div>
      <h1>Recherchez parmis les recettes</h1>

      <input
        type="text"
        placeholder="Search a recipe"
        onChange={(e) => handleInput(setSearch, e)}
      />
      <button onClick={getData}>click</button>
      <p>{data?.meals?.[0]?.strMeal}</p>
      <p>{data?.meals?.[1]?.strMeal}</p>
      <p>{data?.meals?.[2]?.strMeal}</p>
    </div>
  );
};

export default Search;

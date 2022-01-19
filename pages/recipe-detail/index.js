import React, { useState, useEffect } from "react";
import Link from "next/link";

const Search = () => {
  const [search, setSearch] = useState(null);
  const [data, setData] = useState(null);

  function getData() {
    fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => {
        return res.json();
      })
      .then((resObject) => {
        setData(resObject);
        console.log("resObject", { data });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    console.log("search", search);
    console.log("data:", { data });
  }, [{ data }]);

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
      <button onClick={getData}>Search</button>
      {data
        ? data?.meals?.map((item, index) => {
            return (
              <div>
                <Link key={index} href={`/recipe-detail/${item.idMeal}`}>
                  <p key={index}>{item.strMeal}</p>
                </Link>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Search;

import React, { useEffect, useState } from "react";
import Axios from "axios";
import UserList from "./UserList";
import "./App.css";

const App = () => {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getUsers();
  }, [query]);

  const getUsers = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response);
      setUser(response.data);
    });
  };

  const updateSearch = (e) => {
    setSearch(e.target.value); //we put this function to consume data,
    // console.log(search); //so what ever we put in search bar we gonna get that setSearch
  };

  const getSearch = (e) => {
    e.preventDefault(); //Stop page refresh
    setQuery(search); // Get result from query whatever we put in search
    setSearch(""); //Back to empty input every time we excute our request
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit" onClick={getSearch}>
          Search
        </button>
      </form>
      <div className="userlist">
        {user.map((data) => (
          <UserList
            key={data.id}
            id={data.id}
            name={data.name}
            username={data.username}
            email={data.email}
            company={data.company.bs}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import List from "./List";
import Search from "./search";
import stories from "./stories";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [current, setCurrent] = useState("");

  const handleChange = (event) => {
    let cond = event.target.value;
    setSearchTerm(cond);
    const filterItem = stories.filter((i) => {
      return i.title.toLowerCase().includes(cond) || i.title.includes(cond);
    });
    setCurrent(filterItem);
  };

  return (
    <div>
      <Search search={searchTerm} onSearch={handleChange} />
      <List list={current === "" ? stories : current} />
    </div>
  );
}
export default App;

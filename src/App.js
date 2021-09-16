import React from "react";
import List from "./List";
import Search from "./search";
import stories from "./stories";

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [current, setCurrent] = React.useState("");

  const handleChange = (event) => {
    let cond = event.target.value;
    setSearchTerm(cond);
    const filterItem = stories.filter((i) => {
      return i.title.includes(cond) || i.title.toLowerCase().includes(cond);
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

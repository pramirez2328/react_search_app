import React from "react";
import Item from "./Item";

function List({ list }) {
  return (
    <div>
      {list.map(({ id, ...item }) => {
        return <Item key={id} {...item} />;
      })}
    </div>
  );
}

export default List;

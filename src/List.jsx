import React from "react";

function List(props) {
  return (
    <div>
      {props.list.map((item) => {
        return (
          <div key={item.objectID}>
            <ul>
              <li>
                <a href={item.url}>{item.title}</a>
              </li>
              <li>Name: {item.author}</li>
              <li>Number of comments: {item.num_comments}</li>
              <li>Points: {item.points}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default List;

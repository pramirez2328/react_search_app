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
              <li>
                <strong>Name:</strong> {item.author}
              </li>
              <li>
                <strong>Number of comments:</strong> {item.num_comments}
              </li>
              <li>
                <strong>Points:</strong> {item.points}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default List;

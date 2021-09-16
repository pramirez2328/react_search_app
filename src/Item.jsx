import React from "react";

function Item({ url, title, author, num_comments, points }) {
  return (
    <div>
      <ul>
        <li>
          <a href={url}>{title}</a>
        </li>
        <li>
          <strong>Name:</strong> {author}
        </li>
        <li>
          <strong>Number of comments:</strong> {num_comments}
        </li>
        <li>
          <strong>Points:</strong> {points}
        </li>
      </ul>
    </div>
  );
}

export default Item;

import React from "react";

import "./style.css";

function Comment({ data }) {
  return (
    <div className="CommentContainer">
      <img src={data.author.avatar} alt="Comment photo" />
      <div className="CommentContent">
        <b><a href="#">{data.author.name}</a></b> <span>{data.content}</span>
      </div>
    </div>
  );
}

export default Comment;
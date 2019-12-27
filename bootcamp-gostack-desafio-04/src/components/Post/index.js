import React from "react";

import "./style.css";
import Comment from "../Comment";

function Post({ data }) {
  return (
    <div key={data.id} className="Post">
      <div className="PostContainer">
        <div className="header">
          <img src={data.author.avatar} alt="Profile picture" />
          <div>
            <b><a href="#">{data.author.name}</a></b>
            <small>{data.date}</small>
          </div>
        </div>
        <div className="content">{data.content}</div>
        {data.comments.map(comment => (
          <Comment key={comment.id} data={comment} />
        ))}
      </div>
    </div>
  );
}

export default Post;
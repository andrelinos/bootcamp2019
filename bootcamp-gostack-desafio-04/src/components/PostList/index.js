import React, { Component } from "react";

import "./style.css";
import Post from "../Post";
import mantis from "../../assets/mantis.jpg";
import groot from "../../assets/profileGroot.jpg";
import diego from "../../assets/diegoProfile.png";
import yondu from "../../assets/yondu.jpeg";
import gamora from "../../assets/gamora.jpeg";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Baby Groot",
          avatar: groot
        },
        date: "26 de dezembro às 22:25",
        content: "He point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: diego
            },
            content:
              "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        ]
      },
      {
        id: 2,

        author: {
          name: "Mantis",
          avatar: mantis
        },
        date: "26 de dezembro às 22:39",
        content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. `,
        comments: [
          {
            id: 1,
            author: {
              name: "Yondu",
              avatar: yondu
            },
            content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`
          },
          {
            id: 3,
            author: {
              name: "Mantis",
              avatar: mantis
            },
            content: `Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.`
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Yondu",
          avatar: yondu
        },
        date: "26 de dezembro às 22:55",
        content: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: diego
            },
            content:
              `It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`
          }
        ]
      },
      {
        id: 4,
        author: {
          name: "Gamora",
          avatar: gamora
        },
        date: "26 de dezembro às 22:55",
        content: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: diego
            },
            content:
              `It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="PostList">
        <div className="PostListContainer">
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </div>
      </div>
    );
  }
}

export default PostList;
import React from "react";

import "./App.css";
import Header from "./components/Header";
import PostList from "./components/PostList";
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Header />
      <PostList />
      <GlobalStyle />
    </>
  );
}

export default App;
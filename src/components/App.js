import React from "react";
import blogData from "../data/blog";
import About from "./About"
import Header from "./Header";
import Articlelist from "./ArticleList";

console.log(blogData);

function App() {
  const {name, image, about, posts} = blogData;
  
  return (
    <div className="App">
      <Header name={name}/>
      <About image={image} about={about}/>
      <Articlelist articles={posts}/>
    </div>
  );
}

export default App;

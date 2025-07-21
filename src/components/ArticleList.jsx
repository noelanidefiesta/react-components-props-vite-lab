import React from "react";
import Article from "./Article";

// ArticleList is a child of App
// It receives a list of blog posts and uses map to create Article components
function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article 
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;

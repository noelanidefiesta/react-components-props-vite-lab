import React from "react";

// Article is a child of ArticleList
// It receives a title, date, and preview to display a blog post
function Article({ title, date, preview }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;

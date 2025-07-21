import React from "react";

// Header is a child component of App
// It receives and displays the blog name from props
function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;

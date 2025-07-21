import React from "react";

// About is a child of App that shows an image and about text
// Props passed are: image (for the logo) and about (blog description)
function About({ image, about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;

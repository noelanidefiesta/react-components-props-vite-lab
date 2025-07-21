// blog.js contains data that will be used in the blog
// This data is imported into App and passed down to other components

const blogData = {
  name: "My Awesome Blog",
  image: "https://via.placeholder.com/215",
  about: "Welcome to my blog! I write about tech, life, and the things I learn.",
  posts: [
    {
      id: 1,
      title: "Getting Started with React",
      date: "July 20, 2025",
      preview: "Let's dive into React components and props!"
    },
    {
      id: 2,
      title: "Understanding Prop Drilling",
      date: "July 21, 2025",
      preview: "Learn how data flows through the component tree."
    }
  ]
};

export default blogData;
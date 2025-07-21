# Blog Site (React Lab)

This project is a beginner-friendly React app that builds a simple blog using reusable components and props.

---

## Component Tree

```
App
├── Header        (Receives `name` prop)
├── About         (Receives `image` and `about` props)
└── ArticleList   (Receives `posts` prop)
    └── Article   (Receives `title`, `date`, `preview`)
```

---

## How to Run This Project

1. Make sure you have Node.js and npm installed.
2. Download this folder or clone the repo.
3. Open terminal and navigate into the project directory.
4. Run:

```bash
npm install
npm run dev
```

5. Visit `http://localhost:5173` in your browser.

---

## What You’re Practicing

- Creating and organizing components
- Passing props down the tree
- Rendering dynamic data using JSX
- Understanding component hierarchy

---

## Screenshot

Include a screenshot of your blog after running it locally!

---

## Tips

- Use `console.log(props)` inside a component to understand what's being passed.
- Check if each component has the correct data it needs.
- Keep components small and focused.


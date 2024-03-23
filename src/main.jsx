import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blogs from "./Components/Navbar/Blogs.jsx";
import Bookmarks from "./Components/Navbar/Bookmarks.jsx";
import MainSection from "./Components/MainSection/MainSection.jsx";
import Home from "./Components/Home/Home.jsx";
import Blog from "./Components/Blog/Blog.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainSection></MainSection>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader:()=>fetch('https://dev.to/api/articles?per_page=20&top=7')
      },
      {
        path:"/blog/:id",
        element:<Blog></Blog>,
        loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`)
      },
      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

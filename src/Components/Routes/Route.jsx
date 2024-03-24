import { createBrowserRouter } from "react-router-dom";
import MainSection from "../MainSection/MainSection";
import Home from "../Home/Home";
import Blogs from "../Navbar/Blogs";
import Blog from "../Blog/Blog";
import Bookmarks from "../Navbar/Bookmarks";
import Content from "../Content/Content";
import Author from "../Author/Author";

export const router = createBrowserRouter([
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
        loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7"),
      },
      {
        path: "/blog/:id",
        element: <Blog></Blog>,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
          {
            index: true,
            element: <Content></Content>,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
          },
          {
            path: "author",
            element: <Author></Author>,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
          },
        ],
      },
      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>,
      },
    ],
  },
]);

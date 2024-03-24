import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { saveBlog } from "../Utils";

const Blog = () => {
  const blog = useLoaderData();
  const [tabIndex, setTabIndex] = useState(0);
  const {
    title,
    description,
    public_reactions_count,
    comments_count,
    published_at,
    reading_time_minutes,
    tags,
  } = blog;
  const handleBookMark = (blog) => {
    saveBlog(blog)
  };

  return (
    <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
      <article className="space-y-8 bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900">
        <div className="space-y-6 p-4">
          <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
            Suspendisse ut magna et ipsum sodales accumsan.
          </h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400 dark:text-gray-600">
            <div className="flex items-center md:space-x-2">
              <p className="text-sm">
                {reading_time_minutes} min read •
                {new Date(published_at).toLocaleDateString()}
              </p>
            </div>
            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
              {comments_count} Comments • {public_reactions_count} views
            </p>
          </div>
          {/* Tabs */}
          <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
            <Link
              to=""
              onClick={() => setTabIndex(0)}
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  rounded-t-lg ${
                tabIndex === 0 ? "border border-b-0" : "border-b"
              } border-gray-400 dark:border-gray-600 text-gray-50 dark:text-gray-900`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Content</span>
            </Link>
            <Link
              to={`author`}
              onClick={() => setTabIndex(1)}
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  rounded-t-lg ${
                tabIndex === 1 ? "border border-b-0" : "border-b"
              } border-gray-400 dark:border-gray-600 text-gray-50 dark:text-gray-900`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <span>Author</span>
            </Link>
            {/* Bookmarks button */}
            <div
              onClick={() => handleBookMark(blog)}
              className="bg-[#dbccff] rounded-full p-4 text-[#ff00d3]"
            >
              <BsFillBookmarkStarFill />
            </div>
          </div>
        </div>
        <Outlet></Outlet>
      </article>
    </div>
  );
};

export default Blog;

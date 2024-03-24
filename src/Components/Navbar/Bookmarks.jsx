import { useEffect, useState } from "react";
import { deleteBlogs, getBlogs } from "../Utils";
import BlogCard from "../BlogCard.jsx/BlogCard";
import EmptyState from "../EmptyState/EmptyState";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);
  const handleDelete = (id) => {
    deleteBlogs(id);
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  };
  if(blogs.length<1){
    return <EmptyState message='No Booksmarks Available' address={'/blogs'} label={'Go to blogs'}></EmptyState>
  }
  return (
    <div className="grid py-4 px-4 lg:px-8 justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard
          handleDelete={handleDelete}
          deleteable={true}
          key={blog.id}
          blog={blog}
        ></BlogCard>
      ))}
    </div>
  );
};

export default Bookmarks;

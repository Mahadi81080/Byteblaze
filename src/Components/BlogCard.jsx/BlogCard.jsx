import { Link } from "react-router-dom";
import placeHolderImg from "../../assets/404.jpg";
import { MdDeleteForever } from "react-icons/md";

const BlogCard = ({ blog, deleteable,handleDelete }) => {
  const { title, description, cover_image, published_at, id } = blog;
  
  return (
    <div className="flex relative">
      <Link
        to={`/blog/${id}`}
        rel="noopener noreferrer"
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 transition hover:scale-105 hover:border-secondary border-opacity-30 border border-primary p-2"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 dark:bg-gray-500"
          src={cover_image || placeHolderImg}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs dark:text-gray-600">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
      {deleteable && (
        <div
          onClick={() => handleDelete(id)}
          className="absolute right-0 bg-primary hover:bg-secondary p-3 rounded-full text-2xl text-secondary hover:text-primary -top-5"
        >
          <MdDeleteForever />
        </div>
      )}
    </div>
  );
};

export default BlogCard;

import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ item: { id, images, title, description } }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
      <div className="blog-card bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <img
            src={images}
            alt="Blog"
            className="blog-image object-cover w-full h-48 sm:h-64 lg:h-80"
          />
        </div>
        <div className="p-4 sm:p-6">
          <h4 className="blog-title text-base sm:text-lg lg:text-xl font-semibold mb-2">
            {title}
          </h4>
          <p className="blog-description text-gray-600 text-sm sm:text-base">
            {description}
          </p>
        </div>
        <Link
          to={`/blogSingle/${id}`}
          className="blog-link flex items-center justify-center bg-green-500 text-white py-2 px-4 rounded-b-lg hover:bg-green-700 transition-all duration-300"
        >
          Explore more <i className="fas fa-long-arrow-alt-right ml-1"></i>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;

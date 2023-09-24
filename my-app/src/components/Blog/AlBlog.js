import React, { useState } from 'react';
import BlogCard from './BlogCard';
import BlogData from './BlogData';

function AlBlog() {
  const [items, setItems] = useState(BlogData);

  return (
    <>
      <section className="blog ">
        <div className="container">
          <div className="content flex_spacing">
            {items.map((item) => {
              return <BlogCard key={item.id} item={item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default AlBlog;
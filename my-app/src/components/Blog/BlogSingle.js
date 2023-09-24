import React, { useEffect, useState } from 'react';
import HeadTitle from '../HeadTitle/HeadTitle';
import { Link, useParams } from 'react-router-dom';
import EmptyFile from '../EmptyFile';
import BlogData from './BlogData';

function BlogSingle() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    let item = BlogData.find((item) => item.id === parseInt(id));
    if (item) {
      setItem(item);
    }
  }, [id]);

  return (
    <div>
      <HeadTitle />
      {item ? (
        <section className='single-page'>
          <div className='container'>
            <Link
              to='/Blog'
              className='bg-green-500 p-5 relative top-9 right-[-80%] rounded-md shadow-2xl text-stone-500 font-bold hover:bg-green-700 hover:text-slate-100 transition-all duration-300'
            >
              <i className='fas fa-long-arrow-alt-left'></i>
              Go Back
            </Link>
            <article className='content grid grid-cols-1 gap-8 md:grid-cols-2 mt-[50px] p-5'>
              <div className='main-content'>
                <img src={item.images} alt='Blog' className='w-full h-auto' />
                <h2 className='font-light mt-8 mb-3 text-2xl'>{item.title}</h2>
                <div className='category flex_spacing'>
                  <p>{item.date}</p>
                </div>
              </div>
              <div className='side-content'>
                <div className='category-list'>
                  <h2 className='mb-4 text-xl'>Categories</h2>
                  <hr className='mb-4' />
                  <ul>
                    {BlogData.map((item) => (
                      <li key={item.id}>
                        <i className='far fa-play-circle'></i>
                        {item.description}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>
      ) : (
        <EmptyFile />
      )}
    </div>
  );
}

export default BlogSingle;
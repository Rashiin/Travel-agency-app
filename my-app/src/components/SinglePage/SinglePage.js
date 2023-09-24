import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Alitems from '../Destination/Alitems';
import Sdata from '../Destination/Sdata';
import EmptyFile from '../EmptyFile';

function SinglePage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const selectedItem = Sdata.find((item) => item.id === parseInt(id));
    if (selectedItem) {
      setItem(selectedItem);
    }
  }, [id]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <Link
          to="/destination"
          className="bg-green-500 p-5 rounded-md shadow-2xl text-stone-500 font-bold hover:bg-green-700 hover:text-slate-100 transition-all duration-300 inline-flex items-center gap-2"
        >
          <i className="fas fa-long-arrow-alt-left"></i>
          Go Back
        </Link>
        {item ? (
          <section className="mt-10 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-2">
              <img
                src={item.images}
                alt={item.title}
                className="object-cover rounded-md shadow-2xl h-full w-full"
              />
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <h2 className="text-2xl font-bold mb-3">Where is {item.title} located?</h2>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </section>
        ) : (
          <EmptyFile />
        )}
      </div>
    </div>
  );
}

export default SinglePage;
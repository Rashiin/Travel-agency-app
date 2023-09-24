import React from 'react';

function Card(props) {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden flex flex-row flex-wrap w-full h-auto sm:h-auto md:w-1/3 md:h-auto lg:w-1/3 2xl:w-1/3 xl:w-1/3 lg:h-auto mx-auto transition duration-300 ease-in-out transform hover:scale-105">
      <img
        src={props.cover}
        alt={props.title}
        className="w-full h-auto sm:h-auto md:w-1/3 md:h-auto lg:w-1/3 2xl:w-1/3 xl:w-1/3 lg:h-auto object-cover object-center"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{props.title}</h3>
        <p className="text-gray-600">{props.desc}</p>
        <div className="flex items-center mt-4">
          <i className="fas fa-heart text-red-500 mr-2"></i>
          <i className="fas fa-share-alt text-blue-500"></i>
        </div>
      </div>
    </div>
  );
}

export default Card;
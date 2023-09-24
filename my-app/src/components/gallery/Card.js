import React, { useState } from 'react';

const Card = (props) => {
  const toggleModal = () => {
    setPopup(!popup);
  };

  const [popup, setPopup] = useState(false);

  const cardTitleClasses = `text-sm sm:text-base md:text-lg lg:text-xl font-semibold ${
    popup ? 'visible opacity-100' : 'invisible opacity-0'
  }`;

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
      <div className="relative">
        <img
          src={props.images}
          alt={props.title}
          className="w-full h-auto sm:h-48 md:h-64 lg:h-72"
        />
        <div
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer"
          onClick={toggleModal}
        >
          <i className="fas fa-expand text-white text-2xl"></i>
        </div>
      </div>
      <div className="px-4 py-3">
        <h4 className={cardTitleClasses}>
          {props.title}
        </h4>
      </div>

      {popup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-black bg-opacity-75"
            onClick={toggleModal}
          ></div>
          <div className="relative max-w-screen-md w-full bg-white p-6 rounded-lg overflow-hidden">
            <button
              className="absolute top-4 right-4 text-gray-700 hover:text-red-500 cursor-pointer"
              onClick={toggleModal}
            >
              <i className="fas fa-times text-2xl"></i>
            </button>
            <img
              src={props.images}
              alt={props.title}
              className="w-full h-auto"
            />
            <p className="text-lg mt-4">{props.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
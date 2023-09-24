import React, { useState } from 'react';

const Card = (props) => {
  const [popup, setPopup] = useState(false);

  const toggleModal = () => {
    setPopup(!popup);
  };

  return (
    <div className="relative overflow-hidden m-1/2 rounded-lg shadow-lg ">
      <div className="relative aspect-w-16 aspect-h-9">
        <img
          src={props.images}
          alt={props.title}
          className="w-full h-full object-cover"
        />
        <button
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer"
          onClick={toggleModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="text-white text-2xl"
          >
            <path
              fill="currentColor"
              d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2v14h14V5H5zm5 4v2h4V9h-4zm0 4v2h4v-2h-4z"
            />
          </svg>
        </button>
      </div>
      <div className="p-2">
        <h5 className="text-xs md:text-lg lg:text-xl font-extralight">
          {props.title}
        </h5>
      </div>

      {popup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-black bg-opacity-75"
            onClick={toggleModal}
          ></div>
          <div className="relative w-full max-w-screen-md bg-white rounded-lg overflow-hidden flex flex-col">
            <button
              className="absolute top-4 right-4 text-gray-700 hover:text-red-500 cursor-pointer"
              onClick={toggleModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="text-2xl"
              >
                <path
                  fill="currentColor"
                  d="M18.4 5.6l-1.8-1.8L12 10.2 7.4 5.6 5.6 7.4 10.2 12l-4.6 4.6 1.8 1.8L12 13.8l4.6 4.6 1.8-1.8L13.8 12l4.6-4.6z"
                />
              </svg>
            </button>
            <img
              src={props.images}
              alt={props.title}
              className="w-full h-auto"
            />
            <div className="p-4 md:p-6 flex flex-col flex-grow">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
                {props.title}
              </h2>
              <p className="text-base md:text-lg flex-grow">{props.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;

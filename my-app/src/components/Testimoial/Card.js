import React from 'react';

const Card = (props) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
        <div className="text-gray-500 mb-4">
          <i className="fa fa-quote-left text-2xl"></i>
        </div>
        <div className="mb-4">
          <p className="text-lg text-gray-800">{props.desc}</p>
        </div>
        <hr className="border-gray-300 mb-4" />
        <div className="flex items-center">
          <div className="mr-4">
            <img
              src={props.profile}
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div>
            <h4 className="text-xl text-gray-800 font-semibold">
              {props.name}
            </h4>
            <p className="text-gray-500">{props.text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
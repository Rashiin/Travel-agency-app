import React, { useState } from 'react';

const Slide = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const [searchField, setSearchField] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [hotels, setHotels] = useState([]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const handleSearchChange = (e) => {
    setSearchField(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://restcountries.com/v2/name/${searchField}`);
      const data = await response.json();
      setSearchResults(data);

      const hotelResponse = await fetch("https://hotels4.p.rapidapi.com/v2/get-meta-data", {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY", // Replace with your RapidAPI key
          "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
        },
      });
      const hotelData = await hotelResponse.json();
      setHotels(hotelData); // Store hotel data in state variable
    } catch (error) {
      console.error(error);
    }
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div>
      <section className='slider'>
        <div className='control-btn'>
          <button className='prev' onClick={prevSlide}>
            <i className='fas fa-caret-left'></i>
          </button>
          <button className='next' onClick={nextSlide}>
            <i className='fas fa-caret-right'></i>
          </button>
        </div>
        {slides.map((slide, index) => {
          return (
            <div className={index === current ? "slide active" : "slide"} key={index}>
              {index === current && <img src={slide.images} alt="slide" />}
            </div>
          );
        })}
      </section>

      <section className='slide-form  absolute  rounded-sm'>
        <div className='container'>
          <h2 className=' mt-[30px] text-neutral-300'>Enjoy Your Holiday</h2>
          <span className=' text-lime-400 font-mono'>Book here ! </span>
          <form onSubmit={handleSearch}>
            <input
              placeholder='search here ...'
              type='text'
              value={searchField}
              onChange={handleSearchChange}
            />
            <div className='flex_spacing'>
              <input type='date' placeholder='check In' />
              <input type='date' placeholder='check Out' />
            </div>
            <div className='flex_spacing'>
              <input type='number' placeholder='Adult' />
              <input type='number' placeholder='Childern' />
            </div>
            <input type='number' placeholder='Rooms' />
            <input type='Submit' value='Search' className='submit' />
          </form>
          {searchResults.length > 0 && (
            <div>
              <h3 className='text-neutral-200 font-semibold'>Search Results:</h3>
              <ul className='text-lime-300 p-2 font-mono'>
                {searchResults.map((result) => (
                  <li key={result.name}>{result.name}</li>
                ))}
              </ul>
            </div>
          )}
          {hotels.length > 0 && (
            <div>
              <h3 className='text-neutral-200 font-semibold'>Hotels:</h3>
              <ul className='text-lime-300 p-2 font-mono'>
                {hotels.map((hotel) => (
                  <li key={hotel.id}>{hotel.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Slide;
// src/Home.jsx
import React from 'react';

function Home({ setActiveTab }) {
  return (
    <div className="home">
      {/* <h2>Welcome to the Home Page</h2> */}
      <div className="option  " onClick={() => setActiveTab('News')}>
        <h3 className='text-2xl font-bold'>News</h3>
        <p  className='text-white' >Stay updated with the latest news from around the world.</p>
      </div>
      <div className="option" onClick={() => setActiveTab('Weather')}>
        <h3 className='text-2xl font-bold' >Weather</h3>
        <p className='text-white' >Get the current weather updates for your location.</p>
      </div>
    </div>
  );
}

export default Home;

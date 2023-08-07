import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="secContainer container">
        <div className="homeText">
          <h1 className="title">Plan Your Trip With Travel</h1>
          <p className="subTitle">
            Travel to your favourite city with respectfull ofer
          </p>
          <button className="btn">
            <a href="#">Explore Now</a>
          </button>
        </div>

        <div className="homeCard grid">
          <div className="locationDiv">
            <label htmlFor="location">location</label>
            <input type="text" placeholder="Dream Destination"></input>
          </div>

          <div className="distDiv">
            <label htmlFor="distance">location</label>
            <input type="text" placeholder="11/Meters"></input>
          </div>

          <div className="priceDiv">
            <label htmlFor="price">location</label>
            <input type="text" placeholder="140-$500"></input>
          </div>

          <button className="btn">search</button>
        </div>
      </div>
    </section>
  );
};

export default Home;

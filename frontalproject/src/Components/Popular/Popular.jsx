import React from 'react';
import './Popular.css';
import img from '../../Assets/London.jpg';
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from 'react-icons/bs';

const Data = [
  {
    id: 1,
    imgSrc: img2,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
  },

  {
    id: 2,
    imgSrc: img3,
    destTitle: 'Combodia',
    grade: 'CULTURAL RELAX',
  },

  {
    id: 3,
    imgSrc: img4,
    destTitle: 'hassan',
    grade: 'CULTURAL RELAX',
  },
  {
    id: 4,
    imgSrc: img5,
    destTitle: 'paris',
    grade: 'CULTURAL RELAX',
  },
];
const Popular = () => {
  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">Popular Destination</h2>
            <p>
              From Historical cities to natural specteculars, come see the best
              of the world !
            </p>
          </div>

          <div className="iconsDiv flex">
            <BsArrowLeftShort className="icon" />
            <BsArrowRightShort className="icon" />
          </div>
        </div>

        <div className="mainContent grid">
          <div className="singleDestination">
            <div className="destImage">
              <img src={img} alt="Image title" />

              <div className="overlayInfo">
                <h3>Some text</h3>
                <p>bla bla bla</p>

                <BsArrowRightShort className="icon" />
              </div>
            </div>

            <div className="destFooter">
              <div className="number">01</div>

              <div className="destText flex">
                <h6>London</h6>
                <span className="flex">
                  <span className="dot">
                    <BsDot className="icon" />
                  </span>
                  Dot
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;

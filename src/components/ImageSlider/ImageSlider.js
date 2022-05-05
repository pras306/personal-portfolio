import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

import './ImageSlider.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageSlider = ({ sliderData }) => {

  const [ current, setCurrent ] = useState(0);

  if(!Array.isArray(sliderData) || sliderData?.length <= 0) return null;

  const nextSlide = () => {
    setCurrent(current === sliderData?.length - 1 ? 0 : current + 1);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? sliderData?.length - 1 : current - 1);
  }

  return (
    <div className='slider'>
      <FaArrowAltCircleLeft className='slider__arrow left' onClick={prevSlide} />
      <FaArrowAltCircleRight className='slider__arrow right' onClick={nextSlide} />
      <div className='slider__image_container' style={{'marginLeft': `-${current * 100}%`}}>
        {sliderData.map((project, idx) => {
          return (
            <div className='slider__image' key={uuidv4()} >
              <ImageCard image={project.image} title={project.title} content={project.content} footerLabels={project.footerLabels} siteLink={project.siteLink} codeLink={project.codeLink} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
import React from 'react';
import '../static/review.css';

export function Review(props) {
  return (
    <div className='review-container'>
      <img className='review-image' src={require(`../imgs/${props.image}`)} alt='Zed' />
      <div className='review-text-container'>
        <p className='review-name'><strong>{props.name}</strong></p>
        <p className='review-skin'>{props.skin}</p>
        <p className='review-text'>{props.text}</p>
      </div>
    </div>
  );
}
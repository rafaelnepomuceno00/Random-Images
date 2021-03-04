import React from 'react';
import './index.css'
function Card({img}) {

  return (
    <div className='card'>
        <img src={"https://picsum.photos/200/300?random=" +img} alt='treste'></img>

    </div>
  );
}

export default Card;

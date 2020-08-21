import React from 'react';
import bf from './bf.jpg';
import './Image.css';

console.log(bf);

function Image() {
    return (
    <div>
      <img src={bf} alt="Boba Fett" />
      <div className='bf'></div>
    </div>
    )
}


export default Image;

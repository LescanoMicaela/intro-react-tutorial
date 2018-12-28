import React from 'react';
import loadimg from '../../assets/loader.gif'

const Loader = props => (
  <div>
    <img
    style={{width:75}}
    alt='loader icon'
    src={loadimg} />
  </div>
);

export default Loader;

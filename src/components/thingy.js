import React from 'react'
import logo from '../logo.svg';

const Thingy = (props) => {
  return <div className={props.cn}>
    <input type="range" min="0" max="360" onChange={props.sh} />
    <img src={logo} className="App-logo" alt="logo" style={{transform: 'rotate(' + props.top + 'deg)'}} />
  </div>
}

export default Thingy;

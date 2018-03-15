import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Thingy from './components/thingy';

class App extends Component {
  constructor(){
    super();
    this.state={
      // wanted to randomise starting positions
      top: Math.round( (Math.random()*360+1) ),
      left: Math.round( (Math.random()*360+1) ),
      right: Math.round( (Math.random()*360+1) ),
      bottom: Math.round( (Math.random()*360+1) ),
      unlocked: false,
      // maybe change to an array and randomise
      message: 'existence is pain'
    }
    // randomise win criteria 
    this.tu = Math.round( (Math.random()*360+1) ).toString();
    this.lu = Math.round( (Math.random()*360+1) ).toString();
    this.ru = Math.round( (Math.random()*360+1) ).toString();
    this.bu = Math.round( (Math.random()*360+1) ).toString();
    // this.unlocked = false;
  }

  sliderHandler=(e)=> {
    const rot = e.target.value;
    if(e.target.parentElement.className === 'top'){
      this.setState({top: rot});
    } else if(e.target.parentElement.className === 'left'){
      this.setState({left: rot});
    } else if(e.target.parentElement.className === 'right'){
      this.setState({right: rot});
    } else if(e.target.parentElement.className === 'bottom'){
      this.setState({bottom: rot});
    }
    this.checkLocks();
  }
  checkLocks=()=>{
    let du = (
      this.state.top === this.tu
      &&
      this.state.left === this.lu
      &&
      this.state.right === this.ru
      &&
      this.state.bottom === this.bu
    );
    if(du){
      // this.setState(prevState => ({unlocked: !prevState.unlocked}))
      this.setState({unlocked: true});
    } else {
      this.setState({unlocked: false});
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">No clues here... sorry >:)</h1>
        </header>
          
          <div className="box">
            {/* <div className="top">
              <input type="range" min="0" max="360" onChange={this.sliderHandler} />
              <img src={logo} className="App-logo" alt="logo" style={{transform: 'rotate(' + this.state.top + 'deg)'}} />
            </div> */}
            {/* <div className="left">
              <img src={logo} className="App-logo" alt="logo" style={{transform: 'rotate(' + this.state.left + 'deg)'}} />
              <input type="range" min="0" max="360" onChange={this.sliderHandler} />
            </div> */}


            <Thingy cn="top" top={this.state.top} sh={this.sliderHandler}/>
            <Thingy cn="left" top={this.state.left} sh={this.sliderHandler}/>
            <div id="door_container" className={this.state.unlocked === true ? "win": ""}>
              <span className="message">{this.state.message}</span>
              <div id="topDoor" className={this.state.top === this.tu ? "unlocked" : ""}></div>
              <div id="leftDoor" className={this.state.left === this.lu ? "unlocked" : ""}></div>
              <div id="rightDoor" className={this.state.right === this.ru ? "unlocked" : ""}></div>
              <div id="bottomDoor" className={this.state.bottom === this.bu ? "unlocked" : ""}></div>
            </div>
            <Thingy cn="right" top={this.state.right} sh={this.sliderHandler}/>
            {/* <Thingy cn="bottom" top={this.state.bottom} sh={this.sliderHandler}/> */}


            {/* <div className="right">
              <img src={logo} className="App-logo" alt="logo" style={{transform: 'rotate(' + this.state.right + 'deg)'}} />
              <input type="range" min="0" max="360" onChange={this.sliderHandler} />
            </div> */}
            {/* could have included an if statement in the thingy component to switch the positioning of the range input, but then thought I could also do it with flexbox stuff, then got lazy */}
            <div className="bottom">
              <img src={logo} className="App-logo" alt="logo" style={{transform: 'rotate(' + this.state.bottom + 'deg)'}} />
              <input type="range" min="0" max="360" onChange={this.sliderHandler} />
            </div>
          </div>
      </div>
    );
  }
}

export default App;

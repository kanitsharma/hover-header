import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      x : 50,
      y : 50
    }
  }
  render(){
    const style = {
      transform : `translate(-${this.state.x}px,-${this.state.y}px)`
    }
    const style2 = {
      transform : `translate(${this.state.x}px,${this.state.y}px)`
    }
    const hover = event => {
      this.setState({ x : event.clientX/15 , y : event.clientY/15 })
    }
    const leave = event => {
      this.setState({ x : 50 , y : 50 })
    }
    return(
      <div className='container center'>
        <div onMouseMove = {hover.bind(this)} onMouseLeave = {leave.bind(this)} className='hover'>
          <div className='box'  style = {style2}>
          </div>
          <h1 className='text' style = {style}>revert</h1>
        </div>
      </div>
    )
  }
}


export default App;

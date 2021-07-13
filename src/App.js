import axios from 'axios';
import React, { Component } from 'react'
import Index from './components/Index/Index'

export default class App extends Component {
  handleClick = () => {
    console.log(1);
  }
  render() {
    return (
      <div>
        <Index />
        <div>
          <button onClick={this.handleClick}>点我</button>
        </div>
      </div>
    )
  }
}
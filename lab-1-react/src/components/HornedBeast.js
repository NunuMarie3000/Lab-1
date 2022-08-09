import React, { Component } from 'react'

import './App.css'

export default class HornedBeast extends Component {
  render() {
    return (
        <div className='beast-container'>
          <h2 className='cute-font'>{this.props.title}</h2>
          <img className='img' src={this.props.imageURL} alt='' title={this.props.title}></img>
          <p>{this.props.description}</p>
        </div>
    )
  }
}

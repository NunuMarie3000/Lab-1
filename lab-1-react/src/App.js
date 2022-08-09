import React, { Component } from 'react'

import './components/App.css'

import Header from './components/Header'

import Main from './components/Main'

import Footer from './components/Footer'

export default class App extends Component {
  render() {
    return (
      <>
      <div className='app-container'>
        <Header/>
        <div className='main-container'>
          <Main/>
        </div>
        <Footer/>
      </div>
      </>
    )
  }
}


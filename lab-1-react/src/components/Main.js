import React, { Component } from 'react'

import HornedBeast from './HornedBeast'

//already in an array so i don't need to push it into one
import jsonData from './data.json'


export default class Main extends Component {
  render() {
    return (
      jsonData.map(obj=>{
        return <HornedBeast title={obj.title} imageURL={obj.image_url} description={obj.description}/>
      })
    )
  }
}

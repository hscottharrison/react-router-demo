import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
const BASE_URL = 'https://itunes.apple.com/search?term='

export default class Home extends Component {
   constructor() {
      super()
      this.state = {
         songs: [],
         searchTerm: "michael+jackson"
      }
   }

   render() {
      return (
         <div>
         </div>
      )
   }
   
}
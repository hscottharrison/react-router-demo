import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
// const BASE_URL = 'https://itunes.apple.com/search?term='
import songData from '../../songs'
export default class Shop extends Component {
   constructor() {
      super()
      this.state = {
         songs: [],
         searchTerm: "michael+jackson"
      }
   }

   componentDidMount(){
    //  axios.get(BASE_URL + this.state.searchTerm)
    //  .then(response=>{
    //    console.log(response.data.results)
    //    this.setState({songs: response.data.results})
    //  })
   }

   render() {
     console.log('rendering')
     const songs = songData.map((song, index)=>{
       return(
         <Link  key={song.trackId} to={'shop/' + song.trackId}>
           <div>
            <span><b>{song.artistName}</b> {song.trackName}</span>
           </div>
         </Link>
       )
     })
      return (
         <div>
          <h1>Shop</h1>
          {songs}
         </div>
      )
   }

}

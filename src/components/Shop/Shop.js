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

   componentDidMount() {
      axios.get(BASE_URL + this.state.searchTerm)
      .then(response => {
         this.setState({songs: response.data.results})
      })
      .catch(err => {
         console.log(err)
      })
   }

   render() {
      const songs = this.state.songs.map((song, index) => (
         <Link key={index} to={"/shop/" + song.trackId}>
            <div className="Shop-song">
               <div className="Shop-song-image">
                  <img src={song.artworkUrl100} alt=""/>
               </div>
               <div className="Shop-song-info">
                  <h2>{song.artistName}</h2>
                  <h2>{song.trackName}</h2>
               </div>
            </div>
         </Link>
      ))
      return (
         <div>
            {songs}
         </div>
      )
   }
   
}
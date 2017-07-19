import React, {Component} from 'react'
import songData from '../../songs'
export default class Product extends Component {
   constructor() {
      super()
      this.state={
        song: {}
      }
   }
   componentDidMount() {
      const id = parseInt(this.props.match.params.id)
      const song = songData.find((elem)=>{
        return elem.trackId === id;
      })
      this.setState({song: song})
   }
   render() {
     const {song} = this.state
      return (
        <div>
          <h1>{song.trackName}</h1>
          <h2>{song.artistName}</h2>
          <img src={song.artworkUrl100} alt='' />
        </div>

      )
   }
}

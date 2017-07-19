import React, {Component} from 'react'

export default class Product extends Component {
   constructor() {
      super()
   }
   componentDidMount() {
      console.log(this.props.match)
   }
   render() {
      return (
         <h1>Product</h1>
      )
   }
}
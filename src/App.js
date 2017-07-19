import React, { Component } from 'react'
import './App.css'

import {Switch, Route} from 'react-router-dom'

import Nav from './components/Nav/Nav'

class App extends Component {
  render() {
    return (
       <div className="App">
         <Nav />
         <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shop" component={Shop} />
            <Route path="/shop/:productId" component={Shop} />
            <Route path="/cart" component={Cart} />
         </Switch>
      </div>
    );
  }
}

export default App;


function Home () {
   return (
      <h1>Home</h1>
   )
}

function Shop () {
   return (
      <h1>Shop</h1>
   )
}
function Cart () {
   return (
      <h1>Cart</h1>
   )
}
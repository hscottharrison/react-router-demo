import React, {Component} from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'
import Cart from './components/Cart/Cart'
import Product from './components/Product/Product'
class App extends Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div>
        <Nav />
        <header className='App-header'>Goodbye World</header>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/shop' component={Shop} />
          <Route path='/shop/:id' component={Product} />
        </Switch>
      </div>

    )
  }
}

export default App

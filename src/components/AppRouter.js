
import React from 'react'
import {BrowserRouter,Route,Switch}from 'react-router-dom'
import BooksApp from '../App'
import Search from './search'

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
          <Route exact path="/" component={BooksApp} />
          <Route path="/search" component={Search}/>
      </Switch>
      </BrowserRouter> 
    );
  }
}

export default AppRouter;


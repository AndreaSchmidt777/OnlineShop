import React from 'react';
import {BrowserRouter,Switch, Route } from 'react-router-dom';
import './App.css';
import ShopPage from './pages/shop/shop.component';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';





function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
   
    
    <Switch>
     
     <Route exact path='/' component={HomePage} />
     <Route path='/shop' component={ShopPage} />
     </Switch>
     
    </div>
    </BrowserRouter>
    
  );
}

export default App;

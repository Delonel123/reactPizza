import './scss/app.scss'
import Header from './components/Header';
import ManiPage from './pages/MainPage';
import { Route } from 'react-router-dom';
import Basket from './pages/Basket';
import React from 'react';
const App = () => {
  



  return (
    <div classNameName="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" exact component={ManiPage} />
          <Route path="/Basket" exact component={Basket} />
        </div>
      </div>
    </div>
  )
}


export default App

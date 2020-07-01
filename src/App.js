import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component.jsx';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shoppage/shoppage.component.jsx';
import SignInAndSignUppage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';



function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/signIn" component={SignInAndSignUppage}/>
      </Switch>
    </div>
  );
}

export default App;

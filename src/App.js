import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component.jsx';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shoppage/shoppage.component.jsx';
import SignInAndSignUppage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';



class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { 
      // this.setState({ currentUser: user })    
      // createUserProfileDocument(user);
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });        
        });        
      }
      this.setState({currentUser: userAuth});
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/signIn" component={SignInAndSignUppage}/>
        </Switch>
      </div>
    );
  }
}

export default App;

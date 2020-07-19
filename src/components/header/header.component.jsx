import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

import { connect } from 'react-redux';

const Header = ({ currentUser }) => {
    return(
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="log" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">Shop</Link>
                <Link className="option" to="/contact">Contact</Link>
                {
                    currentUser ? 
                    <div className="option" onClick={() => auth.signOut()}>Sign Out</div> 
                    : <Link className="option" to="/signIn">Sign In</Link>
                }
                
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
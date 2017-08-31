import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  renderLinks(){
    if (this.props.authenticated) 
    {
      return [
        <li key={0} className="nav-item">
          <Link className="nav-link" to="/signout">Sign Out</Link>
        </li>
      ];
    }
    else{
      return [
        <li key={1} className="nav-item">
          <Link className="nav-link" to="/signin">Sign in</Link>
        </li>,
        <li key={2} className="nav-item">
          <Link className="nav-link" to="/signup">Sign up</Link>
        </li>
      ];
    }
  }

  render() {
    return (
      <nav className="navbar navbar-light">
      	<Link to={"/"} className='navbar-brand'>HOME</Link>
        <ul className="nav navbar-nav">
      		{this.renderLinks()}
      	</ul>
      </nav>
    );
  }
}

function mapStateToProps(state){
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header) ;
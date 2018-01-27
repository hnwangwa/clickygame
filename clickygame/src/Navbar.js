import React, { Component } from 'react';
import logo from './logo.svg';


class Navbar extends Component {
  render() {
  	const style = {
  		linkStyle: {
  			color: 'red'
  	

  		}
  	}
    return (
      <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
		  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>
		  <li style={style.linkStyle} class="navbar-brand" href="#">ClickyGame</li>
		  	<li style ={style.linkStyle} class="navbar-brand">You guessed Incorrectly!</li>
		  		<li style ={style.linkStyle}>
		  			"Score: "
		  			"0"
		  			" | Top Score: "
		  			"5"
		  			</li>
		  </nav>
    );
  }
}

export default Navbar;

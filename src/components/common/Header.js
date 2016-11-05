import React from 'react';

import {Link} from 'react-router';

const Header = () => {
	return (
		<nav className="navbar navbar-default">
		  <div className="container-fluid">
		    <div className="navbar-header">
		      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="navbar-collapse" aria-expanded="false">
		        <span className="sr-only">Toggle navigation</span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		      </button>
		      <Link to="/" className="navbar-brand">Armory</Link>
		    </div>
		  </div>
		</nav>
	);
};

export default Header;
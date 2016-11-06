import React from 'react';

import {Link} from 'react-router';

const Header = () => {
	return (
		<nav className="navbar navbar-default">
		  <div className="container-fluid">
		    <div className="navbar-header">
		      <Link to="/" className="navbar-brand">Armory</Link>
		    </div>
		  </div>
		</nav>
	);
};

export default Header;
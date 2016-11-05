import React from 'react';
import Search from '../search/Search';

class HomePage extends React.Component {
	render() {
		return (
			<div>
				<div className="mast">
					<div className="container">
						<h1>The Armory</h1>
						<Search fetchCharacter={this.props.fetchCharacter} />
					</div>
				</div>
			</div>
		);
	}
}

export default HomePage;
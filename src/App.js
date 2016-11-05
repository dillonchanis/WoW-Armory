import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router'

import Header from './components/common/Header';

import axios from 'axios';
import api from './api.config.js';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			character: '',
			realm: '',
			details: {}
		};

		this.fetchCharacter = this.fetchCharacter.bind(this);
		this.fetchCharacterDetails = this.fetchCharacterDetails.bind(this);
	}

	componentWillUpdate(nextProps, nextState) {
		localStorage.setItem('character-name', JSON.stringify(nextState.character));
		localStorage.setItem('character-realm', JSON.stringify(nextState.realm));
		localStorage.setItem('character-details', JSON.stringify(nextState.details));
	}

	fetchCharacter(character) {
		this.setState({
			character: character.name,
			realm: character.realm
		}, function() {
			this.fetchCharacterDetails();
		});
	}

	fetchCharacterDetails() {
		const self = this;

		let name = this.state.character;
		let realm = this.state.realm;

		const url = `${api.baseURL}${realm}/${name}?fields=items,stats,pvp&locale=en_US&apikey=${api.key}`;

		axios.get(url).then(function(response) {
			self.setState({
				details: response.data
			});

			browserHistory.push('/character');
		});
	}

  render() {
    return (
      <div>
      	<Header />
        <div>
        	{this.props.children  && React.cloneElement(this.props.children, {fetchCharacter: this.fetchCharacter})}
        </div>
      </div>
    );
  }
}

App.propTypes = {
	children: PropTypes.object.isRequired
}

export default App;
import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router'

import Header from './components/common/Header';

import { hideLoader } from './helpers';

import axios from 'axios';

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

		axios
			.post('/', {
				name: name,
				realm: realm
			})
			.then(function(response) {
				hideLoader();
				self.setState({
					details: response.data
				});

				browserHistory.push('/character');
			})
			.catch(function(error) {
				hideLoader();
				if(error){
					alert('There was an error getting a character with that name or realm. Please try again!');
				}
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
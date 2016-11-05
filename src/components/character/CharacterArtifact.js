import React from 'react';

import axios from 'axios';
import api from '../../api.config.js';

import { artifactMap } from '../../ArtifactMap';

import CharacterArtifactDetails from './CharacterArtifactDetails';

class CharacterArtifact extends React.Component {
	constructor() {
		super();

		this.state = {
			artifactTree: [],
			artifactTalents: [],
			loading: true
		};
	}

	componentDidMount() {
		let artifactTreeArr = [];
		const self = this;
		const artifact = this.props.details.items.mainHand.artifactTraits;
		const traitSpells = artifactMap();


		let mappedArtifact = artifact.map(trait =>
			traitSpells[trait.id][0]
		);

		for(let spellId of mappedArtifact) {
			/*axios.get(`https://us.api.battle.net/wow/spell/${spellId}?locale=en_US&apikey=${api.key}`)
					 .then(function(response) {
					 		artifactTreeArr.push(response.data);
					 		self.setState({
					 			artifactTree: artifactTreeArr
					 		});
					 });*/
				artifactTreeArr.push(axios.get(`https://us.api.battle.net/wow/spell/${spellId}?locale=en_US&apikey=${api.key}`)
					 .then(function(response) {
					 		return response.data;
					 }));
		}

		Promise.all(artifactTreeArr).then(val => self.setState({
			artifactTree: val
		}));
	}

	render() {
		return(
			<div>
				<h2>Artifact Traits</h2>
				<CharacterArtifactDetails artifactTalent={this.state.artifactTree} />
			</div>
		);
	}
}

export default CharacterArtifact;
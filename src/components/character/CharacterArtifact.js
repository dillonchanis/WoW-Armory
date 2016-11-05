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
				artifactTreeArr.push(axios.post('/api/spell', {
							spellId: spellId
						})
						.then(function(response) {
							return response.data;
						})
				);
		}

		Promise.all(artifactTreeArr).then(val => self.setState({
			artifactTree: val
		}));
	}

	render() {
		return(
			<div>
				<h2>Artifact Traits</h2>
				<br />
				<CharacterArtifactDetails artifactTalent={this.state.artifactTree} />
			</div>
		);
	}
}

export default CharacterArtifact;
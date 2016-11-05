import React from 'react';

import CharacterArtifactDetailRow from './CharacterArtifactDetailRow';

class CharacterArtifactDetails extends React.Component {
	constructor() {
		super();

		this.state = {
			talents: []
		};

		this.renderArtifactDetails = this.renderArtifactDetails.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			talents: nextProps.artifactTalent
		});
	}

	renderArtifactDetails() {
		if(this.state.talents.length >= 1) {
			return (
				this.state.talents.map(talent => 
					<CharacterArtifactDetailRow 
						key={talent.id} 
						name={talent.name} 
						desc={talent.description} 
						pic={talent.icon}
					/>
				)
			);
		}
	}

	render() {
		return (
			<div>
			{ this.renderArtifactDetails() }
			</div>
		);
	}
}

export default CharacterArtifactDetails;
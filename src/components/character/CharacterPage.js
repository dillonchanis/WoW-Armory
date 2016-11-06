import React from 'react';
import { browserHistory } from 'react-router'

import CharacterTalents from './CharacterTalents';
import CharacterStats from './CharacterStats';
import CharacterArtifact from './CharacterArtifact';

import { getClassName } from '../../helpers';

class CharacterPage extends React.Component {
	componentWillMount() {
		const localStorageName = localStorage.getItem('character-name');
		const localStorageRealm = localStorage.getItem('character-realm');
		const localStorageDetails = localStorage.getItem('character-details');

		if(localStorageName || localStorageRealm || localStorageDetails) {
			this.setState({
				character: JSON.parse(localStorageName),
				realm: JSON.parse(localStorageRealm),
				details: JSON.parse(localStorageDetails)
			});
		}
	}

	render() {
		const details = this.state.details;
		const resourceClassName = details.stats.powerType + ' progress-bar';

		if (this.state === null) {
			browserHistory.push('/');
		}

		return(
			<div className="character-sheet-bg">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<header>
						    <h1 className="media-heading">{this.state.character}</h1>
						    <h2 className="media-heading">{this.state.realm}</h2>
						    <p className={getClassName(details.class)}>{details.level} {details.talents[0].spec.name} {getClassName(details.class)}</p>
							</header>

					    <div className="progress">
							  <div className="progress-bar health" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>
							    {details.stats.health}
							  </div>
							</div>
							<div className="progress">
							  <div className={resourceClassName} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>
							    {details.stats.power}
							  </div>
							</div>
						</div>
						<CharacterTalents details={this.state.details} />
					</div>
					
					<CharacterStats details={details} charClass={getClassName(details.class)} />	

					<CharacterArtifact details={details} />
				</div>
			</div>
		);
	}
}

export default CharacterPage;
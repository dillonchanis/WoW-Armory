import React from 'react';
import { browserHistory } from 'react-router'

import CharacterTalents from './CharacterTalents';
import CharacterStats from './CharacterStats';
import CharacterArtifact from './CharacterArtifact';

import { isEmpty, getClassName } from '../../helpers';

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

		if (this.state === null || isEmpty(details)) {
			browserHistory.push('/');
		}

		return(
			<div className={"character-sheet-bg " + getClassName(details.class)}>
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<header className="character-sheet">
						    <a href={`http://us.battle.net/wow/en/character/${this.state.realm}/${this.state.character}/simple`} target="_blank"><h1 className="media-heading">{this.state.character}</h1></a>
						    <h2 className="media-heading">{this.state.realm}</h2>
						    <p className={getClassName(details.class)+' text'}>{details.level} {details.talents[0].spec.name} {getClassName(details.class)}</p>
							</header>

					    <div className="progress">
							  <div className="progress-bar health" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>
							    {details.stats.health}
							  </div>
							</div>
							<div className="progress">
							  <div className={details.stats.powerType + ' progress-bar'} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>
							    {details.stats.power}
							  </div>
							</div>
						</div>
					</div>
					
					<div className={getClassName(details.class) + ' divider'}></div>

					<CharacterStats details={details} charClass={getClassName(details.class)} />	

					<div className={getClassName(details.class) + ' divider'}></div>

					<CharacterTalents details={this.state.details} />

					<div className={getClassName(details.class) + ' divider'}></div>

					<CharacterArtifact details={details} />
				</div>
			</div>
		);
	}
}

export default CharacterPage;
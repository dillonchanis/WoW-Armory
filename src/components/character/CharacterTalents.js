import React from 'react';

class CharacterTalents extends React.Component {
	constructor(){
		super();

		this.sortTalents = this.sortTalents.bind(this);
	}

	sortTalents() {
		const talents = this.props.details.talents[0].talents;

		let sortedTalents = talents.sort(function(a, b) {
			if (a.tier > b.tier) {
				return 1;
			}
			if (a.tier < b.tier) {
				return -1;
			}

			return 0;
		});

		return sortedTalents;
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-12">
					<h2>Talents</h2>
					{this.sortTalents().map(choice =>
						<div className="media">
						  <div className="media-left media-middle">
						     <img className="media-object" src={`http://media.blizzard.com/wow/icons/56/${choice.spell.icon}.jpg`} alt={`${choice.spell.name} Icon`} />
						  </div>
						  <div className="media-body">
						    <h4 className="media-heading">{choice.spell.name}</h4>
						   	<p>{choice.spell.description}</p>
						  </div>
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default CharacterTalents;
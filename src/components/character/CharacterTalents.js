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
			<div className="col-md-4 col-md-offset-2">
				<ul className="list-unstyled talent-choices">
					{this.sortTalents().map(choice =>
						<li><img className="icons-small" src={`http://media.blizzard.com/wow/icons/36/${choice.spell.icon}.jpg`} />{choice.spell.name}</li>
					)}
				</ul>
			</div>
		)
	}
}

export default CharacterTalents;
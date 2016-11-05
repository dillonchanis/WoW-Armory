import React from 'react';

import { formatPercentage } from '../../helpers';

const CharacterStats = ({details, charClass}) => {
	return(
		<div className="row">
			<div className="col-md-4">
				<div className={`panel panel-default border ${charClass} `}>
				  <div className="panel-body">
				    <p>Strength: {details.stats.str}</p>
				    <p>Agility: {details.stats.agi}</p>
				    <p>Intellect: {details.stats.int}</p>
				    <p>Stamina: {details.stats.sta}</p>
				  </div>
				</div>
			</div>
			<div className="col-md-4">
				<div className={`panel panel-default border ${charClass} `}>
				  <div className="panel-body">
				    <p>Armor: {details.stats.armor}</p>
				    <p>Dodge: {formatPercentage(details.stats.dodge)}%</p>
				    <p>Parry: {formatPercentage(details.stats.parry)}%</p>
				    <p>Block: {details.stats.block}</p>
				  </div>
				</div>
			</div>
			<div className="col-md-4">
				<div className={`panel panel-default border ${charClass} `}>
				  <div className="panel-body">
				    <p>Crit: {formatPercentage(details.stats.crit)}%</p>
				    <p>Haste: {formatPercentage(details.stats.haste)}%</p>
				    <p>Mastery: {formatPercentage(details.stats.mastery)}%</p>
				    <p>Versatility: {details.stats.versatility}</p>
				  </div>
				</div>
			</div>
		</div>		
	);
};

export default CharacterStats;

					
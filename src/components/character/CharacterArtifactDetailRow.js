import React from 'react';

const CharacterArtifactDetailRow = ({name, desc, pic}) => {
	return (
		<div className="media">
		  <div className="media-left media-middle">
		     <img className="media-object" src={`//media.blizzard.com/wow/icons/56/${pic}.jpg`} alt={`${name} Icon`} />
		  </div>
		  <div className="media-body">
		    <h4 className="media-heading">{name}</h4>
		   	<p>{desc}</p>
		  </div>
		</div>
	);
}

export default CharacterArtifactDetailRow;
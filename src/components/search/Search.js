import React from 'react';

class Search extends React.Component {
	constructor() {
		super();

		this.getFormData = this.getFormData.bind(this);
	}

	getFormData(event) {
		event.preventDefault();

		const character = {
			name: event.target.name.value,
			realm: event.target.realm.value
		};

		this.props.fetchCharacter(character);
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-5">
					<form onSubmit={this.getFormData}>
				    <h3>Search For A Character</h3>
				    <div className="form-group">
				      <input type="text" className="form-control" name="name" placeholder="Character Name" required />
				    </div>
				    <div className="form-group">
				      <input type="text" className="form-control" name="realm" placeholder="Realm Name" required />
				    </div>
				    <button className="btn btn-primary">Search</button>
		    	</form>
		    </div>
    	</div>
		);
	}
}

export default Search;
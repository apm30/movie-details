import React, { Component } from 'react';
import { connect } from 'react-redux';

export class MovieList extends Component {
	render() {
		return <div>movie list</div>;
	}
}

export default connect()(MovieList);

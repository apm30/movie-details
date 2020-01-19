import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../actions';

export class MovieList extends Component {
	renderList() {
		return this.props.movies.map(movie => {
			return (
				<div className="item" key={movie.title}>
					<div className="right floated content">
						<button
							onClick={() => this.props.selectMovie(movie)}
							className="ui button primary"
						>
							Select
						</button>
					</div>
					<div className="content">{movie.title}</div>
				</div>
			);
		});
	}
	render() {
		return <div className="ui divided list">{this.renderList()}</div>;
	}
}

const mapStateToProps = state => {
	console.log('state', state);
	return { movies: state.movies };
};

export default connect(mapStateToProps, { selectMovie: selectMovie })(
	MovieList
);

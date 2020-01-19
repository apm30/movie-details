import React from 'react';
import { connect } from 'react-redux';

function MovieDetail({ movie }) {
	if (!movie) {
		return <div>select a movie</div>;
	}
	return (
		<div>
			<h3>Details for:</h3>
			<p>Title: {movie.title}</p>
			<p>Duration: {movie.duration}</p>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		movie: state.selectedMovie
	};
};
export default connect(mapStateToProps)(MovieDetail);

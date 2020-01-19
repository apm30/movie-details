import { combineReducers } from 'redux';

const moviesReducer = () => {
	return [
		{ title: 'The Matrix', duration: '2:30' },
		{ title: 'Star Wars', duration: '2:22' },
		{ title: 'The Avengers', duration: '2:23' },
		{ title: 'Star Trek', duration: '2:08' }
	];
};

const selectedMovieReducer = (selectedMovie = null, action) => {
	if (action.type === 'MOVIE_SELECTED') {
		return action.payload;
	}

	return selectedMovie;
};

export default combineReducers({
	movies: moviesReducer,
	selectedMovie: selectedMovieReducer
});

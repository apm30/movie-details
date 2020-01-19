import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

function App() {
	return (
		<div className="ui container grid">
			<div className="ui row">
				<div className="column eight wide">
					<MovieList />
				</div>{' '}
				<div className="column eight wide">
					<MovieDetail />
				</div>
			</div>
		</div>
	);
}

export default App;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieBox from '../components/MovieBox';

const SearchResults = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
	useEffect(() => {
		const fetchMovies = async () =>{            
			let res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US&page=1&include_adult=false&query=${query}`);
			let data = await res.json();
			setMovies(data.results);
			console.log(data);
		}
		fetchMovies();      
  }, [query]);

  return (
		<div className='container movie-wrapper'>
			<div className='row'>
				{movies.map(movie => <MovieBox key={movie.id} id={movie.id} title={movie.title} posterPath={movie.poster_path} />)}
			</div>
		</div>
	)
};

export default SearchResults;
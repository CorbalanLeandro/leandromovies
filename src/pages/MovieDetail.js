import React, { useState, useEffect } from 'react';
import './movieDetail.css'

const MovieDetail = ({ match }) => {
  const [movie, setMovie] = useState();
  const movieId = match.params.id;
	const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US`
  useEffect(() => {
    const fetchMovies = async () =>{            
      let res = await fetch(url);
      let data = await res.json();
      setMovie(data);
    }
		fetchMovies();
	}, [url])
	if(movie) {
		const date = (new Date((movie.release_date).split('-').join(', '))).getFullYear();
		const windowWidth = window.innerWidth
		const movieGenres = movie.genres.map(genre => genre.name).join(', ')
		const style = {width: `${movie.vote_average * 10}%` }
		return (
			<section className='container'>
				<article className='row bg-light'>
					<div className='col-12 mt-3'>
						<figure>
							<img className='w-100' src={`https://image.tmdb.org/t/p/original${windowWidth < 992 ? movie.poster_path : movie.backdrop_path}`} alt={`Poster of ${movie.title}`} />
						</figure>
					</div>
					<div className='col-12 pb-3'>
						<div className='detail-movie-title'><h1>{movie.title}({date})</h1></div>						
						<div className='rating-div'>
							<p className='d-flex align-items-baseline'>
								<span className='label mr-1'>Rating:</span>
								<span className='star-ratings-css mr-2'>
  								<span className='star-ratings-css-top' style={style} ><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></span>
  								<span className='star-ratings-css-bottom'><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></span>
								</span>
								<span className='label'>({movie.vote_count} votes)</span>
							</p>
						</div>
						<div><p><span className='label'>Genres:</span> <span className='label-text'>{movieGenres}.</span></p></div>
						<div><p><span className='label'>Description:</span> <span className='label-text'>{movie.overview}</span></p></div>
					</div>
				</article>
			</section>
		)
	}	else {
		return( <div>Loading...</div> )
	}
}

export default MovieDetail;
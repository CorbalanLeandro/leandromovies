import React from 'react';
import { Link } from 'react-router-dom';
import './movieBox.css'

const MovieBox = ({ title, posterPath, id }) => (
    <div className='col-12 col-md-4 col-lg-3 p-0'>
        <Link to={`/movie/${id}`}>
            <article className='w-100 movie-box d-flex align-items-baseline'>
                <img className='w-100 movie-img' src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={`Poster of ${title}`} />
                <div className='text-center movie-title-box'>
                    <span className='d-block movie-title text-light text-break'>{title}</span>
                </div>
            </article>
        </Link>
    </div>
)

export default MovieBox;
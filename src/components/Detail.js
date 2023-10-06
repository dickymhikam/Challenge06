import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { Star} from 'react-bootstrap-icons';



function DetailMovie() {
  const { Id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate()
  useEffect(() => {
    const fetchmovieDetail = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASEURL}/movie/${Id}?api_key=${process.env.REACT_APP_APIKEY}`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie detail:', error);
      }
    };

    fetchmovieDetail();
  }, [Id]);

  if (!movie) {
    return <div>LOADING...</div>;
  }

  return(
    <>
    <div className="content">
        <div className="banner">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt="img-banner"
            className="img-fluid"
          />
        </div>
        <div className="mb-3 movie-content container">
          <div className="movie-info">
            <h1 className="title">{movie.title || movie.name}</h1>
            <div className="genres">
                {movie.genres &&
                  movie.genres.map((genre, i) => (
                    <span key={i} className="genres-item">
                      {genre.name}
                    </span>
                  ))}
            </div>
            <p className="overview">{movie.overview}</p>
            <p className="rating">{(movie.vote_average ).toFixed(1)} / 10 <Star className='text-warning ms-2 mt-1'/></p>
            <button className="button-back"onClick={()=> navigate('/')}>Back Home</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailMovie

import React, { useEffect, useState } from 'react';
import {useParams,useNavigate } from 'react-router-dom';
import {Star} from 'react-bootstrap-icons';
import axios from 'axios';
import { toast } from 'react-toast';

function DetailMovie() {
  const { Id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchmovieDetail = async () => {
      try {
        const token = localStorage.getItem("token")
        const response = await axios.get (`https://shy-cloud-3319.fly.dev/api/v1/movie/${Id}`,
        {
          headers: {
            Authorization : `Bearer ${token}`
          }
        }
      );
        const data = response.data.data
        setMovie(data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // If not valid token
          if (error.response.status === 401) {
            localStorage.removeItem("token");
            // Temporary solution
          }

          toast.error(error.response.data.message);
          return;
        }
        toast.error(error.message);
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

import { useEffect, useState } from "react";
import { getMovieList, searchMovie } from "../api/api";
import { ArrowRight } from "react-bootstrap-icons";
import { Link  } from "react-router-dom";

function Home() {
  const [moviePopular, setMoviePopular] = useState([]);


  useEffect(() => {
    getMovieList().then((results) => {
      setMoviePopular(results);
    });
  }, []);

  const MovieList = () => {
    return moviePopular.map((movie) => {
      return (
        <div className="list">
          <Link to={`/detail/${movie.id}`}>
          <img className="home-img"
           style={{
            width: "285px",
            height: "460px",
            marginLeft: "25px",
            marginTop: "25px",
            borderRadius:"7px"
          }}
            alt={movie.title}
            src={`${process.env.REACT_APP_BASEIMG}/${movie.poster_path}`}
            />
            </Link>
        </div>
      );
    });
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setMoviePopular(query.results);
    }
  };
  console.log({ moviePopular: moviePopular });
  return (
    <>
   
   
      <div className="header">
        
        <span>Popular Movie</span>
        <input
          className="search"
          placeholder="Search Movies"
          onChange={({ target }) => search(target.value)}
        />
        <p>See all Movies<ArrowRight className="ms-2"/></p>
        
      </div>
      <MovieList />
    </>
  );
}

export default Home;

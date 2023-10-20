import { useEffect, useState } from "react";
import { ArrowRight } from "react-bootstrap-icons";
import { Link} from "react-router-dom";
import Header from "../components/Header";
import CarouselHome from "../components/CarouselHome";
import { toast } from "react-toast";
import axios from "axios";


function Home() {
  const [moviePopular, setMoviePopular] = useState([]);

  useEffect(() => {
    const getMovieList = async () => {
      try {
        const token = localStorage.getItem("token");

        const movie = await axios.get(
          `https://shy-cloud-3319.fly.dev/api/v1/movie/popular`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = movie.data.data;
        setMoviePopular(data);

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

    getMovieList();
  }, []);


  const MovieList = () => {
    return moviePopular.map((movie, index) => {
      return (
        <div key={index} className="list">
          <Link to={`/detail/${movie.id}`}>
            <img
              className="home-img"
              style={{
                width: "285px",
                height: "460px",
                marginLeft: "25px",
                marginTop: "25px",
                borderRadius: "7px",
              }}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </Link>
        </div>
      );
    });
  };


  const searchMovie = async (q)=>{
    try{
      const token = localStorage.getItem("token")
      const search = await axios.get(`https://shy-cloud-3319.fly.dev/api/v1/search/movie?page=1&query=${q}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
    )
       return search.data

    } catch (error){
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
  
  const search = async (q) => {
    if (q.length > 2) {
      const query = await searchMovie(q);
      setMoviePopular(query.data);
    }
  };
  console.log({ moviePopular: moviePopular });
  
  return (
    <>
      <Header />
      <CarouselHome />
      <div className="header">
        <span>Popular Movie</span>
        <input
          className="search"
          placeholder="Search Movies"
          onChange={({ target }) => search(target.value)}
        />

        <p>
          See all Movies
          <ArrowRight className="ms-2" />
        </p>
      </div>
      <MovieList />
    </>
  );
}

export default Home;



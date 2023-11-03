import { useEffect, useState} from "react";
import { ArrowRight } from "react-bootstrap-icons";
import { Link} from "react-router-dom";
import Header from "../components/Header";
import CarouselHome from "../components/CarouselHome";
import { useDispatch, useSelector } from "react-redux";
import { getSearchMovie, getAllPosts } from "../redux/actions/postActions";


function Home() {
const [input, setInput] = useState([]);
const dispatch = useDispatch();
const { posts } = useSelector((state) => state.post)

useEffect(() => {
  dispatch(getAllPosts());
},[dispatch]);
 
const { search } = useSelector((state) => state.post)
console.log(search);

  useEffect(() => {
    dispatch(getSearchMovie(input));
  },[dispatch,input]);
  
  const MovieList = () => {
  const filterMovies = search?.length >= 3 ? search : posts;
      return (
        <div>
          {filterMovies &&
            filterMovies?.length > 0 &&
            filterMovies.map((movie) => (
              <div key={movie.id} className="list">
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
            ))}
        </div>
      );
  };



  return (
    <>
      <Header />
      <CarouselHome />
      <div className="header">
        <span>Popular Movie</span>
        <input
          className="search"
          placeholder="Search Movies"
          onChange={(e) => setInput(e.target.value)}
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
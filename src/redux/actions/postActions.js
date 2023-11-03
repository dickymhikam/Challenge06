import axios from "axios";
import { toast } from "react-toastify";
import { setPosts, setPostDetails, setSearch } from "../reducers/postReducers";


export const getAllPosts = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')
    const response = await axios.get(
      `https://shy-cloud-3319.fly.dev/api/v1/movie/popular`,
      {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
  );
    dispatch(setPosts(response.data.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

// Function to get the details of a post
export const getMovieDetails = (Id) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`https://shy-cloud-3319.fly.dev/api/v1/movie/${Id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(JSON.stringify(response.data.data));
    const data = response.data.data;
    dispatch(setPostDetails(data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

// function search movie
export const getSearchMovie = (input) => async (dispatch) =>{
  try{
    const token = localStorage.getItem("token")
    const response = await axios.get(`https://shy-cloud-3319.fly.dev/api/v1/search/movie?page=1&query=${input}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
  )
   dispatch(setSearch(response.data.data));
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


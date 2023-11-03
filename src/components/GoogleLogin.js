import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "react-bootstrap";
// import PropTypes from "prop-types";
import { Google } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerLoginWithGoogle } from "../redux/actions/authActions";

function GoogleLogin({ buttonText }) {
//   const registerLoginWithGoogleAction = async (accessToken) => {
//     try {
//       let data = JSON.stringify({
//         access_token: accessToken,
//       });
      
// let config = {
//     method: "post",
//     maxBodyLength: Infinity,
//     url: 'https://shy-cloud-3319.fly.dev/api/v1/auth/google',  
//     headers: {
//       "Content-Type": "application/json",
//     },
//     data: data,
//   };
  
//       const response = await axios.request(config);
//       const { token } = response.data.data;

//       localStorage.setItem("token", token);

  
//       window.location.href = "/";
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         toast.error(error.response.data.message);
//         return;
//       }
//       toast.error(error.message);
//     }
//   };

//   const loginWithGoogle = useGoogleLogin({
//     onSuccess: (responseGoogle) =>
//       registerLoginWithGoogleAction(responseGoogle.access_token),
//   });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (responseGoogle) => dispatch(registerLoginWithGoogle(responseGoogle.access_token,navigate)),
  });

  return (
    <Button onClick={() => loginWithGoogle()}>
        <Google className="fs-5 mx-2 mb-1"/>
      {buttonText}
    </Button>
  );
}

// GoogleLogin.propTypes = {
//   buttonText: PropTypes.string.isRequired,
// };

export default GoogleLogin;
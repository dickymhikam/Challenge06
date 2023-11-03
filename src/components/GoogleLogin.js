import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "react-bootstrap";
// import PropTypes from "prop-types";
import { Google } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerLoginWithGoogle } from "../redux/actions/authActions";

function GoogleLogin({ buttonText }) {

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

export default GoogleLogin;
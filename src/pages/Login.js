import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "../components/GoogleLogin";
import { login } from "../redux/actions/authActions";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    let data = JSON.stringify({
      email,
      password,
    });

    dispatch(login(data, navigate));
  };
  return (
    <div className="container" style={{ marginTop: "120px" }}>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card border-info rounded shadow">
            <div className="card-body">
              <h4 className="fw-bold text-center">LOGIN</h4>
              <hr />
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-medium">ALAMAT EMAIL</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@gmail.com"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-medium">PASSWORD</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan Password"
                  />
                </div>

                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary fw-medium">
                    LOGIN
                  </button>
                  <h4 className="text-center">OR</h4>
                  <GoogleLogin buttonText="Login with Google" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

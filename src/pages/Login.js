//import hook react
import React, { useState } from "react";

//import hook useHitory from react router dom
import { useNavigate } from "react-router";

//import axios
import axios from "axios";
import { toast } from "react-toast";
import GoogleLogin from "../components/GoogleLogin";

function Login() {
  //define state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //define history
  const navigate = useNavigate();

  //function "loginHanlder"
  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      let data = JSON.stringify({
        email,
        password,
      });

      let config = {
        method: "post",
        url: `https://shy-cloud-3319.fly.dev/api/v1/auth/login`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      const { token } = response.data.data;

      localStorage.setItem("token", token);

      navigate("/");

      // Temporary solution
      window.location.href = "/";
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error(error.message);
    }
  };

  return (
    <div className="container" style={{ marginTop: "120px" }}>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card border-info rounded shadow">
            <div className="card-body">
              <h4 className="fw-bold text-center">LOGIN</h4>
              <hr />
              <form onSubmit={loginHandler}>
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

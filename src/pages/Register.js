//import hook react
import React, { useState } from 'react';

//import hook useHitory from react router dom
import { useNavigate } from 'react-router-dom'; 

//import axios
import axios from 'axios';
import { toast } from 'react-toast';
import GoogleLogin from '../components/GoogleLogin';

function Register() {

    //define state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //define state validation
   

    //define history
    const navigate = useNavigate(); 

    //function "registerHanlder"
    const registerHandler = async (e) => {
        e.preventDefault();
        
        //initialize formData
        try {
            let data = JSON.stringify({
              name,
              email,
              password,
            });
      
            let config = {
              method: "post",
              url: `https://shy-cloud-3319.fly.dev/api/v1/auth/register`,
              headers: {
                "Content-Type": "application/json",
              },
              data: data,
            };
      
            const response = await axios.request(config);
            const { token } = response.data.data;
      
            localStorage.setItem("token", token);
      
            navigate("/login");
      
            // Temporary solution
            window.location.href = "/login";
          } catch (error) {
            if (axios.isAxiosError(error)) {
              toast.error(error.response.data.message);
              return;
            }
            toast.error(error.message);
          }
        };

    return (
        <div className="container" style={{ marginTop: "70px" }}>
        <div className="row justify-content-center">
            <div className="col-md-4">
                <div className="card border-info rounded shadow">
                    <div className="card-body">
                        <h4 className="fw-bold text-center">REGISTER</h4>
                        <hr/>
                        <form onSubmit={registerHandler}>
                            <div className="mb-3">
                            <label className="form-label fw-medium">NAMA LENGKAP</label>
                            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan Nama Lengkap"/>
                            </div>
                         
                            <div className="mb-3">
                            <label className="form-label fw-medium">ALAMAT EMAIL</label>
                            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com"/>
                            </div>

                            <div className="mb-3">
                            <label className="form-label fw-medium">PASSWORD</label>
                            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="********"/>
                            </div>
                          
                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-primary fw-medium">Register</button>
                                <h4 className='text-center'>OR</h4>
                                <GoogleLogin buttonText="Register with Google " />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )

}

export default Register;



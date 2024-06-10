import React, { useState } from "react";
import "./Autentication.scss";
import { useAuthContext } from "../context/Authcontext";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
   const {register} = useAuthContext()
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [error, setError] = useState("")
   const [name,setName] = useState("")
   const navigate = useNavigate()

   async function handleSubmitRegister (){
      try {
         await register(email, password, name)
         navigate("/foodlist")
      } catch (error) {
         setError(error.message)
      }
   }

	return (
		<div id="signin">
			<div className="container">
				<div className="signin">
					<div className="signin--title">
						<div className="signin--title__clip"></div>
						<h1>food explorer</h1>
					</div>
					<div className="signin--block">
						<h2>Create your account</h2>
                  <div className="signin--block__email">
							<h4>Your name</h4>
							<input
								type="text"
								placeholder="Your name"
                        onChange={(e)=> setName(e.target.value)}
							/>
						</div>
						<div className="signin--block__email">
							<h4>Email</h4>
							<input
								type="email"
								placeholder="Example: exemplo@exemplo.com.br"
                        onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="signin--block__email">
							<h4>Password</h4>
							<input
								type="password"
								placeholder="At least 6 characters"
                        onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<button onClick={handleSubmitRegister}>Create Account</button>
                  <Link to="/login"><h5>I already have an account</h5> </Link>
						
               {error && <p style={{color:"red", fontFamily:"Roboto, sans-serif,", marginTop:"-20px"}}>{error}</p>}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;

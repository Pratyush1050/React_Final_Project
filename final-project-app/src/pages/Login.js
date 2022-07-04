import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

const Login = () => {
	const [identifier, setIdentifier] = useState();
	const [password, setPassword] = useState();
	const navigate = useNavigate();
	const login  = useAuth();

	const submitHandler = async (e) => {
		e.preventDefault();
		await login(identifier, password);
	};
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-7 col-lg-5">
					<div className="wrap">
						<div
							className="img"
							style={{ backgroundImage: `url(${login})` }}
						></div>
						<div className="login-wrap p-4 p-md-5">
							<div className="d-flex">
								<div className="w-100">
									<h3 className="mb-4">Sign In</h3>
								</div>
							</div>
							<form action="#" className="signin-form">
								<div className="form-group mt-3">
									<input
										type="text"
										className="form-control"
										required
										onChange={(e) => setIdentifier(e.target.value)}
									/>
									<label className="form-control-placeholder" For="username">
										Username
									</label>
								</div>
								<div className="form-group">
									<input
										id="password-field"
										type="password"
										className="form-control"
										required
										onChange={(e) => setPassword(e.target.value)}
									/>
									<label className="form-control-placeholder" for="password">
										Password
									</label>
									<span
										toggle="#password-field"
										className="fa fa-fw fa-eye field-icon toggle-password"
									></span>
								</div>
								<div className="form-group">
									<button
										type="submit"
										className="form-control btn btn-primary rounded submit px-3"
										onClick={submitHandler}
									>
										Sign In
									</button>
								</div>
							</form>
							<p className="text-center">
								Not a member? <Link to="/register">Sign Up</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Login;

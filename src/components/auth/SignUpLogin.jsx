import "../styles/Auth.css"
import { Link, useLocation } from "react-router-dom"
import LoginForm from "./LoginForm";
import SignupForm from './SignUpForm';
const SignupLogin = () => {
    let path = useLocation();
    return (
        <div className="loginSignupDiv">
            <div>
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/illustrated.webp" alt="" />
            </div>
            <div>
                <div className="achievements">
                    <img className="achievements-logo" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/logo.webp" />
                    <div className="achievements-container">
                        <img className="achievements-container-image" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/students.webp" />
                        <div className="achievements-container-detail">
                            <p className="achievements-container-detail-count">10K+</p>
                            <p className="achievements-container-detail-title">Students Enrolled</p>
                        </div>
                    </div>
                    <div className="achievements-container">
                        <img className="achievements-container-image" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/college.webp" />
                        <div className="achievements-container-detail">
                            <p className="achievements-container-detail-count">1000+</p>
                            <p className="achievements-container-detail-title">Reach in Colleges</p>
                        </div>
                    </div>
                    <div className="achievements-container">
                        <img className="achievements-container-image" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/learning.webp" />
                        <div className="achievements-container-detail">
                            <p className="achievements-container-detail-count">10K+</p>
                            <p className="achievements-container-detail-title">Hours of Learning</p>
                        </div>
                    </div>
                    <div className="achievements-container">
                        <img className="achievements-container-image" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/social.webp" />
                        <div className="achievements-container-detail">
                            <p className="achievements-container-detail-count">150K+</p>
                            <p className="achievements-container-detail-title">Social Community</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="register-container">
                <div className="register-top">
                    <div className="register-links">
                        <div className={path.pathname === "/signup" ? "link-two" : "link-one-active"}><Link to="/signup">SIGNUP</Link></div>
                        <div className={path.pathname === "/login" ? "link-two" : "link-one-active"}><Link to="/login">LOGIN</Link></div>
                    </div>
                </div>
                <div className="register-form">
                    <div className="form-container">
                        <div className="form-top">
                            {
                                path.pathname === "/signup" && <h1 className="form-title">Create your new account</h1>
                            }
                            {
                                path.pathname === "/login" && <h1 className="form-title">Sign in to your account</h1>
                            }
                        </div>
                        <div className="form-middle">
                            {
                                path.pathname === "/signup" && <SignupForm />
                            }
                            {
                                path.pathname === "/login" && <LoginForm />

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupLogin;
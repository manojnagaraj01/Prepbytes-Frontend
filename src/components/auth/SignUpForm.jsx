import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import axios from "axios"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { setUser } from "../Redux/Slice";

const SignupForm = () => {
    let data = {}
    const navi = useNavigate()
    const dispatch = useDispatch()
    const handleChange = (e) => {
        data[e.target.name] = e.target.value
    }
    const successLogin =  (username, email) => {
        let data = {
            username: username,
            email: email
        }
         dispatch(setUser(data))
         navi("/");
    }
    const checkLogin = async (e) => {
        console.log(data)
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:4000/user/signup", data);
            const userData = response.data;
    
            if (userData) {
                successLogin(data.username, data.email);
            } else {
                toast.error("Invalid response from the server", {
                    theme: "colored"
                });
            }
        } catch (error) {
            console.error(error);
            toast.error("Error While Signup", {
                theme: "colored"
            });
        } finally {
            document.getElementById("signupForm").reset();
        }
    }
    return (
        <form id="signupForm" className="form">
            <ToastContainer />
            <div className="form__container">
                <div className="form-field">
                    <TextField label="Name"  name="username" value={data?.username} variant="standard" onChange={handleChange} />
                </div>
            </div>
            <div className="form__container">
                <div className="form-field">
                    <TextField label="Email" name="email" value={data?.email} variant="standard" onChange={handleChange} />
                </div>
            </div>
            <div className="form__container">
                <div className="form-field">
                    <TextField label="Phone No" name="phonenumber" value={data?.phonenumber} variant="standard" onChange={handleChange} />
                </div>
            </div>
            <div className="form__container">
                <div className="form-field">
                    <TextField label="Password" name="password" value={data?.password} type="password" variant="standard" onChange={handleChange} />
                </div>
            </div>
            <div className="register-select">
                <div className="select-college-container">
                    <div className="form-field">
                        <TextField label="College" name="college" variant="standard" value={data?.college}  onChange={handleChange} />
                    </div>
                </div>
                <div className="form-field">
                    <label htmlFor="passing-year"></label>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
    <InputLabel id="demo-simple-select-standard-label">Passing Year</InputLabel>
    <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        label="Passing Year"
        onChange={handleChange}
        name="year"
        value={data?.year}
    >
        {[...Array(10).keys()].map((yearOffset) => (
            <MenuItem key={2015 + yearOffset} value={2015 + yearOffset}>
                {2015 + yearOffset}
            </MenuItem>
        ))}
    </Select>
</FormControl>
                </div>
            </div>
            <div className="accept-terms-and-conditions-container">
                <input type="checkbox" className="terms-and-conditions-checkbox" name="terms-and-conditions" checked onChange={handleChange} />
                <span className="accept-terms-and-conditions-label">I agree to the <Link href="https://www.prepbytes.com/terms-and-conditions" target="_blank" className="terms-and-conditions-link">terms and conditions</Link>.</span>
            </div>
            <button type="Submit" className="form-button" onClick={checkLogin}>Sign Up</button>
            <p className="form-status"></p>
        </form>
    )
}

export default SignupForm;

/* eslint-disable react/prop-types */
import { loadStripe } from "@stripe/stripe-js";
import "./../../styles/Mock.css";
import { useDispatch, useSelector } from "react-redux";
import {getUser} from '../../Redux/Slice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Mockcard = ({ practice, name, date, participants, duration, img }) => {
  let dispatch = useDispatch();
  dispatch(getUser())
  let loggedUser = useSelector((state) => state.username)
  function loginCheck(name) {
    loggedUser ? buyTest(name, img) : toast.error("Login First", {
      theme: "colored"
    })
  }
  const buyTest = async (name, img) => {
    const stripe = await loadStripe("fjfuydtshxjkgutsjkfuy");
    let data = {
      "name": name,
      "url": img,
      "price": "1000",
      "quantity": 1
    }
    let body = {
      products: data,
      "email": localStorage.getItem("email")
    }
    console.log(body)
    const headers = {
      "Content-Type": "application/json"
    }
    const response = await fetch("http://localhost:4000/user/create-checkout-session", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    })
    const session = await response.json();
    const result = await stripe.redirectToCheckout({
      sessionId: session.id
    });
    if (result.error) {
      console.log(result.error);
      return
    }
  }
  return (
    <div className={practice === "topic" ? "practiceCard" : practice === "company" ? "companyCard" : "mockCard"}>
      <ToastContainer />
      {!practice && <div className="mockOptions">
        <img src="/info.png" alt="" />
        <img src="/share.svg" alt="" />
      </div>}
      <div className='mockCardDiv'>
        <img src={img ?? "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663504995662-Aptitude%20Based%20Test%203%20icon.svg"} alt="" />
      </div>
      {practice !== "company" && <div className="mockCardInfo">
        <p>{name}</p>
      </div>}
      {!practice && <div className="cardDetails">
        <div className="cardDates">
          <p>{date}</p>
          <p className="detailsName">Date</p>
        </div>
        <div className="cardParticipant">
          <p>{participants}</p>
          <p className="detailsName">Participant</p>
        </div>
        <div className="cardDuration">
          <p>{duration}</p>
          <p className="detailsName">Duration</p>
        </div>
      </div>}
      <div className="btn-div" >
        <button className="btn btn-test" onClick={() => loginCheck(name, img)}>Test Now</button>
      </div>
    </div>
  )
}

export default Mockcard;

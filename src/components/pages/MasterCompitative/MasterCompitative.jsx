import Slider from 'react-slick';
import '../../styles/MasterCompitative.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { endOfCourseData, infoData, mchInfoData, mentorData, quickInfo, studentReview } from "./Data/Data";
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUser } from '../../Redux/Slice';
import Axios from 'axios'
const MasterCompetitiveHome = () => {
    let dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getUser())
    },[dispatch])
    let loggedUser=useSelector((state)=>{
        return state
    })
    console.log(loggedUser)
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }
   
    let [toggleData, setToggleView] = useState("language");
 
    let ref = useRef()
    function handleClick() {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }
    function loginCheck() {
        loggedUser ? makePayment() : toast.error("Login First", {
            theme: "colored"
        })
        makePayment()
    }
    let [courseDate, setCourseDate] = useState("1 May")
    async function makePayment() {
        const stripe = await loadStripe("pk_test_51ObcmDSJzXRCOp2JE0lYlYp8nAdbAktRg9AUlsFNOOfpmJqkthAqldm8i28pLiMrr7qPE59ajAkir2kuBzwFLVEZ00AwnSbfgZ");
        let data = {
            "name": "Master Competitive Programming",
            "url": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-header-image.webp",
            "price": "25",
            "courseDate": courseDate,
            "quantity": 1
        }
        let body = {
            products: data,
            "email": localStorage.getItem("email")
        }
        console.log(body)
        const headers = {
 
            Authorization: `Bearer pk_test_51ObcmDSJzXRCOp2JE0lYlYp8nAdbAktRg9AUlsFNOOfpmJqkthAqldm8i28pLiMrr7qPE59ajAkir2kuBzwFLVEZ00AwnSbfgZ`,
            "Content-Type": "application/json"
        }
        // const response = await fetch("http://localhost:4000/user/create-checkout-session", {
        //     method: "POST",
        //     headers: headers,
        //     body: JSON.stringify(body)
        // })
        const response =await Axios.post('https://prepbytes-backend-server.onrender.com/user/create-checkout-session', body,{
            // headers:{
            //     Authorization:`Bearer pk_test_51ObcmDSJzXRCOp2JE0lYlYp8nAdbAktRg9AUlsFNOOfpmJqkthAqldm8i28pLiMrr7qPE59ajAkir2kuBzwFLVEZ00AwnSbfgZ`
            // }
            headers
            
        });
        console.log(response)
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
        <div className="masterCompetitiveHome">
            <ToastContainer />
            <div className='mch-home'>
                <div>
                    <h1 className='mch-heading'>MASTER COMPETITIVE PROGRAMMING</h1>
                    <p>Master Competitive Programming Fom Zero And Become A Top-Rated Coder <b>Under The Guidance Of Top Competitive Programmers</b></p>
                    <button className="btn btn-enrol" onClick={handleClick}>Enrol Now</button>
                </div>
                <div className='mch-home-img'>
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-header-image.webp" alt="" />
                </div>
            </div>
            <div className='mch-info'>
                {
                    quickInfo.map((item, key) => {
                        return <div className={`mch-info-div mch-info-div-${item.color}`} key={key}>
                            <img src={item.img} alt="" />
                            <p>{item.info}</p>
                        </div>
                    })
                }
            </div>
            <div>
                <h5 className='mch-mentors-heading'>Get Guidance From Industry Leading Mentors</h5>
                <p className='mch-mentors-info'>Other Mentors You Will Be Interacting With</p>
                <div className='mch-mentor-gallary'>
                    {
                        mentorData.map((item, key) => {
                            return <div className='mch-mentor-card' key={key}>
                                <div className='mch-mentor-img'>
                                    <img className='mch-mentor-img' src={item.photo} alt="" />
                                </div>
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>{item.position}</p>
                                    <img className='companyImg' src={item.companyImg} alt="" />
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <div>
                <div>
                    <h5 className='mch-mentors-heading'>Master Competitive Programming With Us</h5>
                </div>
                <div className='mch-cp-wu'>
                    <div className="courseFeatureBgImg">
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Vector.svg" alt='' />
                    </div>
                    <ul className='courseFeatureDetailsUl'>
                        {
                            mchInfoData.map((item, key) => {
                                return <li key={key}>
                                    <div className={key % 2 == 0 ? 'courseFeatureDetails courseDetailsEvenDiv' : 'courseFeatureDetails courseDetailsOddDiv'}>
                                        <div className='courseFeatureDetailsDiv'>
                                            <h5>{item.heading}</h5>
                                            <p>{item.info}</p>
                                        </div>
                                        <div className='courseFeatureImgDiv courseDetailsEvenDiv'>
                                            <img src={item.image} alt="" />
                                        </div>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className='mch-instituteInfo'>
                <div>
                    <h1>10K+</h1>
                    <p>Students Enrolled</p>
                </div>
                <div>
                    <h1>1000K+</h1>
                    <p>Doubts Solved</p>
                </div>
                <div>
                    <h1>2k+ hrs</h1>
                    <p>Mentor Interaction</p>
                </div>
            </div>
            <h1 className='mch-coding-context'>Crack Reputed Coding Contests</h1>
            <div className='mch-coding-context-img'>
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/MCP-company-new.webp" alt="" />
            </div>
            <h1 className='mch-coding-context'>Curriculum</h1>
            <div className='mch-curriculum'>
                <div>
                    <div className="courseSyllabus-div" onClick={() => setToggleView("language")}>
                        <img className="courseSyllabus-img" src="https://prepbytes-uat-images.s3.ap-south-1.amazonaws.com/13.webp" alt="Subject Image" />
                        <div className="courseSyllabus-text">Language Fundamentals (Choose any one of C/C++/Java/Python)</div>
                    </div>
                    <div className="courseSyllabus-div" onClick={() => setToggleView("dsa")}>
                        <img className="courseSyllabus-img" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Icon2.webp" alt="Subject Image" />
                        <div className="courseSyllabus-text">Data Structures and Algorithms</div>
                    </div>
                    <div className="courseSyllabus-div" onClick={() => setToggleView("compMath")}>
                        <img className="courseSyllabus-img" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Icon3.webp" alt="Subject Image" />
                        <div className="courseSyllabus-text">Competitive Maths</div>
                    </div>
                    <div className='courseSyllabus-div-img'>
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Curriculum-Image.webp" alt="" />
                    </div>
                </div>
                <div className='courseDataList'>
                    <ul>
                        {
                            infoData[toggleData].map((item, key) => <li className='mch-topic-list' key={key}>{item}</li>)
                        }
                    </ul>
                </div>
            </div>
            <div className='mch-batch' ref={ref}>
                <h4>SELECT BATCH</h4>
                <div className='mch-enroll-details'>
                    <div className={courseDate === "1 May" ? 'mch-enroll-date-selected' : "mch-enroll-date-not-selected"} onClick={() => setCourseDate("1 May")}>
                        <h3>1st MAY</h3>
                        <p>Enrolment Started</p>
                    </div>
                    <div className={courseDate === "1 May" ? 'mch-enroll-date-not-selected' : "mch-enroll-date-selected"} onClick={() => setCourseDate("15 May")}>
                        <h3>15th MAY</h3>
                        <p>Enrolment Started</p>
                    </div>
                    <div></div>
                    <div className='mch-enroll-div'>
                        <h1 className='mch-enroll-price'>₹ 25000</h1>
                        <button className='mch-enroll-btn' onClick={loginCheck}>Enroll Now</button>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='mch-coding-context'>This Might Be You</h1>
            </div>
            <div className='courseEnd'>
                <h1 className='mch-coding-context'>By The End Of This Course, You Will Be Able To</h1>
                <div className='courseEndDiv'>
                    <div className='courseEndDivImg'>
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Vecto2.webp" alt="" />
                    </div>
                    <div className='courseEndInfo'>
                        {
                            endOfCourseData.map((item, key) => {
                                return <div className={`courseEndDivInfo courseEndDivInfo-${item.color}`} key={key}>
                                    <img src={item.imageSrc} alt="" />
                                    <div>
                                        <h5>{item.content}</h5>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default MasterCompetitiveHome;
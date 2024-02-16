import { Link } from 'react-router-dom'
import '../../styles/FullStack.css'
import { journeyData } from "./Data/Data";
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../Redux/Slice';
import { loadStripe } from '@stripe/stripe-js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const FullStack = () => {

    let ref = useRef()
    function handleClick() {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }
    let dispatch = useDispatch();
    let [journeyItem, setjourneyData] = useState(journeyData[0])
    dispatch(getUser())
    let [courseDate, setCourseDate] = useState("1 May")
    let loggedUser = useSelector((state) => state.username)
    function loginCheck() {
        loggedUser ? makePayment() : toast.error("Login First",{
            theme: "colored"
        })
    }
    async function makePayment() {
        const stripe = await loadStripe("pk_test_51ObcmDSJzXRCOp2JE0lYlYp8nAdbAktRg9AUlsFNOOfpmJqkthAqldm8i28pLiMrr7qPE59ajAkir2kuBzwFLVEZ00AwnSbfgZ");

        let data = {
            "name": "Full Stack Program",
            "url": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-header-image.webp",
            "price": "30000",
            "courseDate": courseDate,
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
        const response =await Axios.post('https://prepbytes-backend-server.onrender.com/user/create-checkout-session', body,{
            headers:{
                Authorization:"Bearer pk_test_51ObcmDSJzXRCOp2JE0lYlYp8nAdbAktRg9AUlsFNOOfpmJqkthAqldm8i28pLiMrr7qPE59ajAkir2kuBzwFLVEZ00AwnSbfgZ"
            }
        });
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
        <div>
            <ToastContainer/>
            <div className='fch-home-main mt-[110px]'>
                <div className="fch-home">
                    <div className='fch-home-left'>
                        <p>Partner with</p>
                        <div className='fch-home-left-img'>
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/development-programs/header-logo.svg" alt="" />
                        </div>
                        <h1>Learn Full Stack Web Development & Build Real World Projects using React & Node</h1>
                        <h3>Full Stack Web Development Certification Course - Accredited by Nasscom, approved by the Government India.</h3>
                        <Link to={"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/PrepBytes+Full+Stack+Development+MERN+Certification+Program.pdf"} target='_blank'>
                            <button>Download Syllabus</button>
                        </Link>
                    </div>
                    <div className='fch-home-right'>
                        <div className='fch-home-right-div'>
                            <p className='fch-home-right-heading'>Next Batch Start: 1st may,2023</p>
                            <p className='fch-home-right-text'>Limited seats available</p>
                        </div>
                        <div className='fch-home-right-div'>
                            <p className='fch-home-right-heading'>Program Duration: 4 - 5 months</p>
                            <p className='fch-home-right-text'>15-20 hours/week</p>
                        </div>
                        <div className='fch-home-right-div'>
                            <p className='fch-home-right-heading'>Learning Format</p>
                            <p className='fch-home-right-text'>Recorded Lectures + Online Live Classes</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='fch-batch'>
                <h3>Select Batch</h3>
                <div>
                    <label htmlFor="may1">
                        <input id='may1' type="radio" checked name='courseDate' onClick={() => setCourseDate("1 May")} />
                        <div>
                            <h4>1st May</h4>
                            <p>Enrolment Started</p>
                        </div>
                    </label>
                </div>
                <div>
                    <label htmlFor="may15">
                        <input id='may15' type="radio" name='courseDate' onClick={() => setCourseDate("15 May")} />
                        <div>
                            <h4>15th May</h4>
                            <p>Enrolment Started</p>
                        </div>
                    </label>
                </div>
                <div>
                    <h2 className='price-enroll-now'>₹30000</h2>
                    <button className='btn-enroll-now' onClick={loginCheck}>Enroll Now</button>
                </div>
            </div>
            <div className='fch-lang-tool'>
                <div className='fch-lang-tool-info'>
                    <p className='fch-lang-tool-heading'>Languages & Tools you will learn</p>
                    <p className='fch-lang-tool-text'>Start learning web development from basics of HTML, CSS, Javascript.Master latest technologies like React, Node, Express. Get hands on Github, MongoDB, Google Analytics, Facebook Analytics</p>
                </div>
                <div className='fch-lang-tool-img'>
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/full-stack-course/tools1.png" alt="" />
                </div>
            </div>
            <div className='fch-journy-main'>
                <div>
                    <h1 className='fch-journy-header'>How will your journey look like?</h1>
                    <p className='fch-journy-para'>We have designed a unique program where you can learn Full stack & experience being a developer sitting at your home</p>
                </div>
                <div className='fch-journy-details'>
                    <div className='fch-journy-details-div1'>
                        {
                            journeyData.map((item, key) => {
                                return <div className='fch-journy-details-list' key={key} onClick={() => { setjourneyData(item); handleClick() }}>
                                    <h1 className='fch-journy-details-list-num'>{key + 1}</h1>
                                    <h4>{item.heading}</h4>
                                </div>
                            })
                        }
                    </div>
                    <div className='fch-journy-details-div2' ref={ref}>
                        <h1 className='fch-journy-details-div2-heading'>{journeyItem.heading ?? ""}</h1>
                        <div >
                            <ul className='fch-journy-details-div2-list'>
                                {
                                    journeyItem.info.map((item, key) => {
                                        return <li key={key}>{item}</li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className='fch-journy-details-div2-img'>
                            <img src={journeyItem.img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='stack-program'>
                <div>
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/full-stack-course/girlimage.webp" alt="" />
                </div>
                <div className='stack-program-info'>
                    <h1>What you will be after finishing the program?</h1>
                    <div>
                        <div className='stack-program-info-div'>
                            <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/after-program/certificate.svg" alt="" />
                            <div>
                                <p>Certified Full stack Developer</p>
                            </div>
                        </div>
                        <div className='stack-program-info-div'>
                            <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/after-program/realtime.svg" alt="" />
                            <div>
                                <p>Experience of Real world work</p>
                            </div>
                        </div>
                        <div className='stack-program-info-div'>
                            <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/after-program/excellent.svg" alt="" />
                            <div>
                                <p>Ready to crack any web developer interview</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='student-review'>
                <p className='student-review-heading1'>Testimonials</p>
                <p className='student-review-heading2'>Our Students Speaks</p>
            </div>
            <div className='fch-last-img'>
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/digital-marketing/Feature.webp" alt="" />
            </div>
        </div >
    )
}

export default FullStack;

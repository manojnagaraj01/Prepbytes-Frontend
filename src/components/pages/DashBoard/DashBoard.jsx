import { useDispatch, useSelector } from 'react-redux'
import "../../styles/Dashboard.css"
import { useEffect, useState } from 'react';
import axios from 'axios';
import CourseCard from './CourseCard';
import { getUser } from '../../Redux/Slice';
const Dashboard = () => {
    let dispatch = useDispatch();
    dispatch(getUser())
    let email=useSelector(state=>state.email)
    let [getCourseData,setCourseData]=useState([])
    useEffect(()=>{
        console.log(email)
        axios.post("http://localhost:4000/user/getCourseOfUser",{"email":email}).then(res=>{
            if(res.data.course){
                setCourseData(res.data.course)
            }
            else{
                setCourseData([])
            }
        })
    },[])
    return (
        <>
            <div className="dashboardView">
                <div className="sidebar">
                    <ul>
                        <li><svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 13.18v2.81c0 .73.4 1.41 1.04 1.76l5 2.73c.6.33 1.32.33 1.92 0l5-2.73c.64-.35 1.04-1.03 1.04-1.76v-2.81l-6.04 3.3c-.6.33-1.32.33-1.92 0L5 13.18zm6.04-9.66l-8.43 4.6c-.69.38-.69 1.38 0 1.76l8.43 4.6c.6.33 1.32.33 1.92 0L21 10.09V16c0 .55.45 1 1 1s1-.45 1-1V9.59c0-.37-.2-.7-.52-.88l-9.52-5.19a2.04 2.04 0 00-1.92 0z"></path></svg>My Course</li>
                    </ul>
                </div>
                <div className='dashboardCardView'>
                    <div className='dashboardCardGrid'>
                        {
                            getCourseData.map((item,key)=><CourseCard courseData={item} key={key}/>)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;

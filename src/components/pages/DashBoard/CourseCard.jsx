import React from "react"
const CourseCard = ({ courseData }) => {
    console.log(courseData)
    return (
        <div className="course-container">
            <img alt="course-bg-img" className="course-bg-image" src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/bg-card+(1).png" />
            <div className="course-rating">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>
            <div className="course-logo-info">
                <div className="course-progress-bar">
                    <img className="course-image" src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/uzxxllgloialmn9mhwfe" />
                </div>
                <div className="course-dates-div">
                    <div className="course-dates">
                        <img className="course-date-icon" alt="clockIcon" src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678116-calendar-512.png" />
                        <div>
                            <div className="course-date-label">START DATE:</div>
                            {/* <div className="course-date">{courseData.courseDate ?? ""}</div> */}
                            <div className="course-date">May 1</div>
                        </div>
                    </div>
                    <div className="course-dates">
                        <img className="course-date-icon" alt="clockIcon" src="/last-visited.svg" />
                        <div>
                            <div className="course-date-label">LAST VISIT:</div>
                            <div className="course-date">18 DEC 2023</div>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className="course-heading">Elevation Academy Batch- Full Stack Web...</h3>
            {/* <h3 className="course-heading">{courseData.name}</h3> */}
        </div>
    )
}

export default CourseCard
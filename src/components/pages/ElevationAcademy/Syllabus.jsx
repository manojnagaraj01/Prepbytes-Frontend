import React from "react";
const Syllabus = ({ id, dates, heading, subHeading, topic, color }) => {
    function toggleData(e) {
        let element = e.target.parentNode.parentNode.nextElementSibling;

        if (element.classList.contains("d-none")) {
            element.classList.remove("d-none");
            e.target.innerText = "-";
        }
        else {
            element.classList.add("d-none")
            e.target.innerText = "+"
        }
    }
    return (
        <>
            <div className='ps-comp-div'>
                <h3 className={`ps-comp-div-date ps-comp-div-${color}`}>{dates}</h3>
                <div>
                    <p className={`ps-comp-div-para ps-comp-div-border-${color}`}><span className={`ps-comp-div-num ps-comp-div-${color}`}>{id}</span><span className="ps-comp-div-heading">{heading}</span><span className={`ps-comp-div-num ps-comp-div-toggle ps-comp-div-color-${color}`} onClick={toggleData}>+</span></p>
                </div>
                <div className={`ps-comp-tech-info d-none ps-comp-div-border-${color}`}>
                    <div>
                        <p>{subHeading}</p>
                        <div>
                            {
                                topic.map((item, key) => <span className={`ps-comp-span-border-${color}`} key={key}>{item}</span>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Syllabus;
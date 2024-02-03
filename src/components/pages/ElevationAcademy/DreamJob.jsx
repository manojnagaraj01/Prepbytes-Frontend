import React from "react"

const DreamJob = ({ id, heading, info, img, color }) => {
    return (
        <div className='dream-process'>
            <div className={color === "red" ? "dream-process-div1 dream-process-div1-red" : 'dream-process-div1'}>
                <span className={`dream-process-span1 dream-process-span1-${color}`}>{id}</span>
                <span className={`dream-process-span2 dream-process-span2-${color}`}>{heading}</span>
            </div>
            <div className='dream-process-info-div '>
                <p>{info}</p>
                <img src={img} alt="" style={{ objectFit: "contain" }} />
            </div>
        </div>
    )
}

export default DreamJob;
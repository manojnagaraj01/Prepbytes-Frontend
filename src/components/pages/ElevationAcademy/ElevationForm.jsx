/* eslint-disable react/prop-types */
import axios from "axios"
import React from "react"

const ElevationForm = ({setFormView}) => {
    let data = {}
    const setData = (e) => {
        data[e.target.name] = e.target.value
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
        axios.post("https://prepbytes-backend-server.onrender.com/user/enquiry-form",data).then(res=>{
            if(res.status===200){
                setFormView(false)
            }
        })
    }
    return (
        <div className='enquiryForm'>
            <div className="enquiryFormDiv">
                <div className="enquiryClose">
                    <i className="fa-solid fa-xmark" onClick={()=>setFormView(false)}></i>
                </div>
                <div className="enquiryFromImg">
                    <img src="/form-img.svg" alt="" />
                </div>
                <div className="enquiryFormData">
                    <h3>Take a step towards your dream job</h3>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="">Name <sup>*</sup></label>
                            <input type="text" name="name" onChange={setData} required />
                        </div>
                        <div>
                            <label htmlFor="">Email <sup>*</sup></label>
                            <input type="email" name="email" onChange={setData} required />
                        </div>
                        <div>
                            <label htmlFor="">Phone <sup>*</sup></label>
                            <input type="tel" name="phone" onChange={setData} required />
                        </div>
                        <div>
                            <label htmlFor="">Branch</label>
                            <input type="text" name="branch" onChange={setData} required />
                        </div>
                        <div>
                            <label htmlFor="">Passout Year</label>
                            <input type="text" name="passout-year" onChange={setData} required />
                        </div>
                        <button className="btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ElevationForm
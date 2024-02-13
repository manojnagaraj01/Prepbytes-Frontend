import AcademyCard from './AcademyCard'
import DreamJob from './DreamJob'
import { academyCardData, dreamJobData, newEventData, placedCompanyImg,  syllabusData } from   "./Data/Data" ;
import "../../styles/ElevationAcademy.css"
import Syllabus from './Syllabus'
import { useState } from 'react'
import ElevationForm from './ElevationForm'
import Event from './Event';
const ElevationAcademy = () => {
    const [formView, setFormView] = useState(false)
    return (
        <div>
            {
                formView && <ElevationForm setFormView={setFormView} />
            }
            <div className="elevationAcademyHome mt-[160px]">
                <div className='elevationAcademyHomeInfo'>
                    <h1>PrepBytes Elevation Academy - Full Stack Web Development Career</h1>
                    <p>Enroll in PrepBytes Elevation Academy - Full Stack Program and Guaranteed Tech Job of minimum 5 LPA.</p>
                    <ul>
                        <li>
                            <img src="/right-arrow.svg" alt="" />
                            Complete Live Class from experts</li>
                        <li>
                            <img src="/right-arrow.svg" alt="" />
                            Be the best Full stack developer
                        </li>
                        <li>
                            <img src="/right-arrow.svg" alt="" />
                            Job Guarantee
                        </li>
                    </ul>
                    <div className='elevationAcademyHomeBtn'>
                        <button className='elevationAcademyHomeBtn-1' onClick={() => setFormView(!formView)}>Apply Now</button>
                        <button className='elevationAcademyHomeBtn-2' onClick={() => setFormView(!formView)}>Get a call back</button>
                    </div>
                </div>
                <div className='elevationAcademyHomeImg'>
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/ISA-masthead-mern-5.webp" alt="" />
                </div>
            </div>
            <div className='new_batch'>
                <div>
                    <p className='new_batch_leftHeading'>For 2023, 2022 & 2021 graduates</p>
                    <p className='new_batch_date'>Batch Starting: 1st May 2023</p>
                </div>
                <div className='new_batch_events'>
                    {
                        newEventData.map((item, key) => <Event key={key} id={item.id} heading={item.heading} img={item.img} date={item.date} />)
                    }
                </div>
            </div>
            <div>
                <h1 className='dream-job-heading'>How will you reach to your dream Job?</h1>
                <div >
                    {
                        dreamJobData.map((item, key) => <DreamJob key={key} id={item.id} heading={item.heading} info={item.info} img={item.img} color={item.color} />)
                    }
                </div>
            </div>
            <h1 className='wp-academy'>Why PrepBytes Elevation Academy?</h1>
            <div className='wp-academy-blog'>
                {
                    academyCardData.map((item, key) => <AcademyCard key={key} heading={item.heading} info={item.info} img={item.img} />)
                }
            </div>
            <div className='ps-comp'>
                <h1 className='ps-heading'>Program Syllabus</h1>
                <p className='ps-heading'>Learn from the best and be prepared to crack full stack developer jobs</p>
                {
                    syllabusData.map((item, key) => <Syllabus key={key} id={item.id} dates={item.dates} heading={item.heading} subHeading={item.subHeading} topic={item.topic} color={item.color} />)
                }
            </div>
            <div className='upcomingBatch'>
                <div>
                    <p className='upcomingBatchHeading'>Upcoming Elevation Academy Batch - Full Stack Web Development Career - May 2023 now OPEN</p>
                    <button className='upcomingBatchBtn' onClick={() => setFormView(!formView)}>Apply Now</button>
                </div>
                <div>
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/batches-back.webp" alt="" />
                </div>
            </div>
            <div className='placedStudent'>
                <h1 className='placedStudentHeading'>Where our Students are placed</h1>
                <p className='placedStudentPara'>You guarantee hard work, We guarantee placements</p>
                <div className='placedCompany'>
                    {
                        placedCompanyImg.map((item, key) =>
                            <div className='placedCompanyDiv' key={key}>
                                <img src={item} alt="" />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ElevationAcademy;
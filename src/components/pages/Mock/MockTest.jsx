import Mockcard from "./MockCard"
import { companyTest, featureMock, mockTest } from "./Data/Data"
import "./../../styles/Mock.css";


const MockTest = () => {
    return (
        <div>
            <div className='mockInfo'>
                <div>
                    <h2>Mock Test</h2>
                    <p>Technical and Aptitude Test is a very important process of most of the placement tests. Crack your next placement with series of PrepBytes practice and mock tests. Practice subject-wise and company-wise tests. Take real-time mock tests with other students and test your preparation.</p>
                </div>
            </div>
            <div className="mockBody">
                <p className="mockHeading">Feature Mock Tests</p>
                <p className="pastMock">PAST MOCK TEST</p>
            </div>
            <div className="mockDataView">
                {
                    featureMock.map((item, key) => <Mockcard key={key} date={item.date} name={item.name} duration={item.duration} participants={item.participants} img={item.img}/>)
                }
            </div>
            <div className="practiceTest">
                <p className="mockHeading">Practice Tests</p>
                <p className="pastMock">Topic Wise</p>
            </div>
            <div className="practiceTestCard">
                {
                    mockTest.map((item, key) =>
                        <Mockcard practice={"topic"} name={item.topic} key={key}  img={item.img}/>
                    )
                }
            </div>
            <div className="practiceTest">
                <p className="pastMock">Company Wise</p>
            </div>
            <div className="practiceTestCard">
                {
                    companyTest.map((item,key)=><Mockcard practice={"company"} key={key} img={item}/>)
                }
            </div>
        </div>
    )
}

export default MockTest;
import { useRef } from "react"
import { mentorsData, questionData } from "./Data/Data"
import "./../../../App.css"
import Footer from './../../Header $ Footer/Footer';
const HomePanel = () => {
    let ref = useRef()
    function handleClick() {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }
    function checkQuiz(e) {
        e.preventDefault()
        const data = e.target.querySelector('input[name="answer"]:checked')
        const data_unchecked = e.target.querySelectorAll('input[name="answer"]')
        console.log(data_unchecked)
        data_unchecked.forEach((item) => {
            item.parentElement.classList.remove("border-red")
            item.parentElement.classList.remove("border-green")
        })
        if (data.value === "do-while") {
            data.parentElement.classList.add("border-green")
        }
        else {
            data.parentElement.classList.add("border-red")
        }
    }
    return (
        <>
            <div className='homeComp1'>
                <div className="HomeHeader__main__left">
                    <h1 className="HomeHeader__main__left--heading">Start your journey of success</h1>
                    <h1 className="HomeHeader__main__left--subheading">Personalised Coding Programs to make coding easier for you</h1>
                    <p className="HomeHeader__main__left-list-item--text">Want to know how PrepBytes can help you?</p>
                    <button className="HomeHeader__main__left-buttons--button-enroll" onClick={handleClick}>Know More</button>
                </div>
                <div className="HomeHeader__main__right">
                    <img className="HomeHeader__main__right--img" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Masterhead(web).svg" alt="header" />
                </div>
            </div>
            <div className="home-achivement">
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Google-launchpad.webp" alt="" />
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/future-skills-homepage.webp" alt="" />
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/she-leads.webp" alt="" />
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/aws-ed-start.webp" alt="" />
            </div>
            <section className="codingJourny">
                <div className="codingJournyLeft">
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/stairs_of_approach(web).svg" alt="" />
                </div>
                <div className="codingJournyRight">
                    <p className="codingJournyheading">How PrepBytes Mentorship driven Personalised Learning works?</p>
                    <div>
                        <p className="weeklyPlanCardHeading" >
                            Personalised Lectures &amp; Weekly Plan
                        </p>
                        <div className="weeklyPlan">
                            <div className="infoDiv infoColorOrange">
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/personalised_learning.svg" alt="" />
                                <p>Get learning videos & weekly plan based on your coding skills</p>
                            </div>
                            <div className="arrowRight">
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMTkiIGhlaWdodD0iODUuOTUzIiB2aWV3Qm94PSIwIDAgMTQxLjE5IDg1Ljk1MyI+CiAgPGcgaWQ9Ikdyb3VwXzQ5MjEiIGRhdGEtbmFtZT0iR3JvdXAgNDkyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4xOSAxLjAxNSkiPgogICAgPHBhdGggaWQ9IlBhdGhfNTE1MyIgZGF0YS1uYW1lPSJQYXRoIDUxNTMiIGQ9Ik02NjgsNDc3MS4xNTRzMTM5LjE4OS0yNywxMzIuNjQ0LDc1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY3Ljk5OSAtNDc2Ny45MTkpIiBmaWxsPSJub25lIiBzdHJva2U9IiM3MDcwNzAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iNCIvPgogICAgPHBhdGggaWQ9Ikljb25faW9uaWMtaW9zLWFycm93LWJhY2siIGRhdGEtbmFtZT0iSWNvbiBpb25pYy1pb3MtYXJyb3ctYmFjayIgZD0iTTIuOTUsOC41NTgsOS40MjgsMi4wODVBMS4yMjMsMS4yMjMsMCwwLDAsNy43LjM1N0wuMzU2LDcuNjkxQTEuMjIxLDEuMjIxLDAsMCwwLC4zMjEsOS4zNzhMNy42OSwxNi43NjNhMS4yMjMsMS4yMjMsMCwwLDAsMS43MzMtMS43MjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjMuODggODQuOTM4KSByb3RhdGUoLTkwKSIgZmlsbD0iIzQyNDI0MiIvPgogIDwvZz4KPC9zdmc+Cg==" alt="" />
                            </div>
                        </div>
                        <div className="codingAssignmentHeading">
                            <p>PERSONALISED CODING ASSIGNMENTS</p>
                        </div>
                        <div className="weeklyPlan">
                            <div className="arrowLeft">
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMTkiIGhlaWdodD0iODUuOTUzIiB2aWV3Qm94PSIwIDAgMTQxLjE5IDg1Ljk1MyI+CiAgPGcgaWQ9Ikdyb3VwXzQ5MjIiIGRhdGEtbmFtZT0iR3JvdXAgNDkyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA1LjE1NykiPgogICAgPHBhdGggaWQ9IlBhdGhfNTE1MyIgZGF0YS1uYW1lPSJQYXRoIDUxNTMiIGQ9Ik04MDAuODY2LDQ3NzEuMTU0cy0xMzkuMTg5LTI3LTEzMi42NDQsNzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NTkuODY2IC00NzcyLjA2MSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI0Ii8+CiAgICA8cGF0aCBpZD0iSWNvbl9pb25pYy1pb3MtYXJyb3ctYmFjayIgZGF0YS1uYW1lPSJJY29uIGlvbmljLWlvcy1hcnJvdy1iYWNrIiBkPSJNMi45NSw4LjU2Mmw2LjQ3OCw2LjQ3MkExLjIyMywxLjIyMywwLDAsMSw3LjcsMTYuNzYyTC4zNTYsOS40MjhBMS4yMjEsMS4yMjEsMCwwLDEsLjMyMSw3Ljc0MUw3LjY5LjM1N0ExLjIyMywxLjIyMywwLDAsMSw5LjQyMywyLjA4NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgODAuNzk2KSByb3RhdGUoLTkwKSIgZmlsbD0iIzQyNDI0MiIvPgogIDwvZz4KPC9zdmc+Cg==" alt="" />
                            </div>
                            <div className="infoDiv infoColorYellow">
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/code_live_with_experts.svg" alt="" />
                                <p>Practice coding questions that adapts based on your progress</p>
                            </div>
                        </div>
                        <p className="doughtSolvingHeading" >
                            DOUBT SOLVING BY CODING EXPERTS
                        </p>
                        <div className="weeklyPlan">
                            <div className="infoDiv infoColorGreen">
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/ask_doubts_totally_live.svg" alt="" />
                                <p>Getting Stuck While Coding? Get all your doubts resolved.</p>
                            </div>
                            <div className="arrowRight">
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMTkiIGhlaWdodD0iODUuOTUzIiB2aWV3Qm94PSIwIDAgMTQxLjE5IDg1Ljk1MyI+CiAgPGcgaWQ9Ikdyb3VwXzQ5MjEiIGRhdGEtbmFtZT0iR3JvdXAgNDkyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4xOSAxLjAxNSkiPgogICAgPHBhdGggaWQ9IlBhdGhfNTE1MyIgZGF0YS1uYW1lPSJQYXRoIDUxNTMiIGQ9Ik02NjgsNDc3MS4xNTRzMTM5LjE4OS0yNywxMzIuNjQ0LDc1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY3Ljk5OSAtNDc2Ny45MTkpIiBmaWxsPSJub25lIiBzdHJva2U9IiM3MDcwNzAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iNCIvPgogICAgPHBhdGggaWQ9Ikljb25faW9uaWMtaW9zLWFycm93LWJhY2siIGRhdGEtbmFtZT0iSWNvbiBpb25pYy1pb3MtYXJyb3ctYmFjayIgZD0iTTIuOTUsOC41NTgsOS40MjgsMi4wODVBMS4yMjMsMS4yMjMsMCwwLDAsNy43LjM1N0wuMzU2LDcuNjkxQTEuMjIxLDEuMjIxLDAsMCwwLC4zMjEsOS4zNzhMNy42OSwxNi43NjNhMS4yMjMsMS4yMjMsMCwwLDAsMS43MzMtMS43MjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjMuODggODQuOTM4KSByb3RhdGUoLTkwKSIgZmlsbD0iIzQyNDI0MiIvPgogIDwvZz4KPC9zdmc+Cg==" alt="" />
                            </div>
                        </div>
                        <div className="codeLiveHeading">
                            <p>CODE LIVE WITH TOP CODERS</p>
                        </div>
                        <div className="weeklyPlan">
                            <div className="arrowLeft">
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMTkiIGhlaWdodD0iODUuOTUzIiB2aWV3Qm94PSIwIDAgMTQxLjE5IDg1Ljk1MyI+CiAgPGcgaWQ9Ikdyb3VwXzQ5MjIiIGRhdGEtbmFtZT0iR3JvdXAgNDkyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA1LjE1NykiPgogICAgPHBhdGggaWQ9IlBhdGhfNTE1MyIgZGF0YS1uYW1lPSJQYXRoIDUxNTMiIGQ9Ik04MDAuODY2LDQ3NzEuMTU0cy0xMzkuMTg5LTI3LTEzMi42NDQsNzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NTkuODY2IC00NzcyLjA2MSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI0Ii8+CiAgICA8cGF0aCBpZD0iSWNvbl9pb25pYy1pb3MtYXJyb3ctYmFjayIgZGF0YS1uYW1lPSJJY29uIGlvbmljLWlvcy1hcnJvdy1iYWNrIiBkPSJNMi45NSw4LjU2Mmw2LjQ3OCw2LjQ3MkExLjIyMywxLjIyMywwLDAsMSw3LjcsMTYuNzYyTC4zNTYsOS40MjhBMS4yMjEsMS4yMjEsMCwwLDEsLjMyMSw3Ljc0MUw3LjY5LjM1N0ExLjIyMywxLjIyMywwLDAsMSw5LjQyMywyLjA4NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgODAuNzk2KSByb3RhdGUoLTkwKSIgZmlsbD0iIzQyNDI0MiIvPgogIDwvZz4KPC9zdmc+Cg==" alt="" />
                            </div>
                            <div className="infoDiv infoColorPink">
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/personalised_practice.svg" alt="" />
                                <p>Topic wise Live Coding sessions with top rated coders</p>
                            </div>
                        </div>
                        <div className="final-goal">
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/achieve_your_coding_dream.svg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <p className="courseHeading" ref={ref}>I WANT TO</p>
                </div>
                <div className="courses">
                    <div className="courseCard">
                        <div className="courseCardBg">
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/bg_prepare_for_campus.webp" alt="" />
                        </div>
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/prepare_for_campus.webp" alt="" />
                        <h2 className="color-blue">Prepare for Campus Placements</h2>
                        <div className="backBtn">
                            <span><i className="fa-solid fa-arrow-right"></i></span>
                        </div>
                    </div>
                    <div className="courseCard">
                        <div className="courseCardBg">
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/bg_master_competetive.webp" alt="" />
                        </div>
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/master_competetive_pgm.webp" alt="" />
                        <h2 className="color-pink">Master Competitive Programming</h2>
                        <div className="backBtn">
                            <span><i className="fa-solid fa-arrow-right"></i></span>
                        </div>
                    </div>
                    <div className="courseCard">
                        <div className="courseCardBg">
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/bg_learn_full_mern.webp" alt="" />
                        </div>
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/learn_full_stack.webp" alt="" />
                        <h2 className="color-green">Build Development Projects</h2>
                        <div className="backBtn">
                            <span><i className="fa-solid fa-arrow-right"></i></span>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="expHomeDiv">
                    <div className="expBoxHome">
                        <p>Are you an Experienced Professional willing to Switch?</p>
                        <div className="profExpBox">
                            <div className="profExpBoxImg">
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/industry_vetted_curriculum.svg" alt="" />
                            </div>
                            <p>INDUSTRY VETTED CURRICULUM STRUCTURED FOR YOU</p>
                        </div>
                        <div className="profExpBox">
                            <div className="profExpBoxImg">
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/real_life_projects.svg" alt="" />
                            </div>
                            <p>REAL LIFE PROJECTS BUILT ON DEMAND TECH STACK</p>
                        </div>
                        <div className="profExpBox">
                            <div className="profExpBoxImg">
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/exclusive_placement.svg" alt="" />
                            </div>
                            <p>EXCLUSIVE PLACEMENT SUPPORT TEAM WITH JOB GURANTEE</p>
                        </div>
                        <div>
                            <p className="courseDetails"> <span> PrepBytes Elevation Academy</span> -  4 months Full Stack Program with Job Guarantee</p>
                        </div>
                        <button className="HomeHeader__main__left-buttons--button-enroll">Know More</button>
                    </div>
                    <div className="expBoxHomeImg">
                        <div className="expBoxHomeImg-div1">
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/for_2020(1st+Image).svg" alt="" />
                        </div>
                        <div className="expBoxHomeImg-div2">
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/tools_for_2020.svg" alt="" />
                            <div>
                                <img className="interviewImg" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/for_2020_image_2.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="founderSection">
                <div className="founderHome">
                    <div className="founderCardBg">
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/know_details_back.svg" alt="" />
                    </div>
                    <div className="founderCard">
                        <div>
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/mamta_mentor.png" alt="" />
                        </div>
                        <header className="founderInfo">
                            <h1>Mamta Kumari</h1>
                            <h3>Co-Founder PrepBytes</h3>
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Amazon%2Bsam.png" alt="" />
                        </header>
                    </div>
                    <div className="freeSeminar">
                        <p>Attend Free sessions with industry experts and get valuable guidance</p>
                        <p>How to master competitive coding?</p>
                        <button className="HomeHeader__main__left-buttons--button-enroll">Know More</button>
                        <hr />
                        <p>How to crack coding interviews?</p>
                        <button className="HomeHeader__main__left-buttons--button-enroll dynamic-margin">Know More</button>
                    </div>
                </div>
            </section>
            <section className="instituteInfo">
                <div className="cardInfo">
                    <div className="cardInfoDiv1">
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/100k_coding.svg" alt="" />
                        <h1>100K+</h1>
                        <p>Coding <br /> Community</p>
                    </div>
                    <div className="cardInfoDiv2">
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/100k_coding.svg" alt="" />
                        <h1>100K+</h1>
                        <p>Coding <br /> Community</p>
                    </div>
                    <div className="cardInfoDiv3">
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/100k_coding.svg" alt="" />
                        <h1>100K+</h1>
                        <p>Coding <br /> Community</p>
                    </div>
                    <div className="cardInfoDiv4">
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/100k_coding.svg" alt="" />
                        <h1>100K+</h1>
                        <p>Coding <br /> Community</p>
                    </div>
                </div>
                <div className="instituteInfoImg">
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Bespoke+Mentors.webp" alt="" />
                </div>
            </section>
            <section className="placedStudent">
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/you_could_be_the(web_1366).png" alt="" />
            </section>
            <section>
                <h1 className="mentor_heading">PrepBytes Mentors</h1>
                <p className="mentor_para">PrepBytes students get mentored by industry experts who have achieved in their careers and are passionate about helping students achieve their dream.</p>
                <div className="mentor_card_gallary">
                    {
                        mentorsData.map((item, key) => {
                            return <div className="mentor_card" key={key}>
                                <div className="mentor_bg_img">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="mentor-div-info">
                                    <div>
                                        <h4>{item.name}</h4>
                                        <p>{item.role}</p>
                                    </div>
                                    <p className="mentor-div-info-para">{item.info}</p>
                                    <span className="mentor-div-info-company">
                                        <img src={item.company} alt="" />
                                    </span>
                                </div>
                            </div>
                        })
                    }
                </div>
            </section>
            <section>
                <div className="home-quiz">
                    <h1 className="home-quiz-heading">Can you solve these questions?</h1>
                    {
                        <div className="home-quiz-div">
                            <h4>{questionData[0].question}</h4>
                            <form onSubmit={checkQuiz}>
                                <div className="home-quiz-answer">
                                    {
                                        questionData[0].options.map((item, key) => {
                                            return <div className="home-quiz-answer-div" key={key}>
                                                <input type="radio" name="answer" id={item} value={item} />
                                                <label htmlFor={item}>{item}</label>
                                            </div>
                                        })
                                    }
                                </div>
                                <button className="quiz-submit-btn" >Submit Answer</button>
                            </form>
                        </div>
                    }
                </div>
            </section>
            <section>
                <div className="collegeRepresent">
                    <div className="collegeRepresent-div">
                        <h3 className="collegeRepresent_btn-title">Want to represent your college?</h3>
                        <div className="collegeRepresent_btn-text">
                            <span>Join <strong>PrepBytes Campus Business Manager Internship program.</strong></span>
                        </div>
                        <button className="collegeRepresent_btn">Join Now</button>
                    </div>
                </div>
            </section>
            <section>
                <h1 className="mentors_colleges_heading">PrepBytes for <span>Mentors & Colleges </span></h1>
                <p className="mentors_college_para">Join PrepBytes in the journey to reach more colleges and mentor more students</p>
                <div className="mentor_college_cards">
                    <div className="mentor_college_Card">
                        <div>
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/be_a_part_of_mentors.png" alt="" />
                        </div>
                        <h3>Be a part of growing Mentor Community of PrepBytes</h3>
                        <p>We look forward to industry experts who have a passion for teaching, mentoring & making students future-ready</p>
                        <button>Know More</button>
                    </div>
                    <div className="mentor_college_Card">
                        <div>
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/futuristic_algo.png" alt="" />
                        </div>
                        <h3>Futuristic ALGO-driven Personalised learning module for your college</h3>
                        <p>Every Student is different, hence their Learning should also be. Get in touch with to understand how PrepBytes can help students in your college</p>
                        <button>Know More</button>
                    </div>
                </div>
            </section>
            <section>
                <div className="mostPopularBlogs">
                    <h1>Most Popular Blog</h1>
                    <div className="mostPopularBlogsGallary">
                        <div className="mostPopularBlog">
                            <img src="https://blog-images-upload.s3.ap-south-1.amazonaws.com/blog_top_50_interview_questions_answers.png" alt="" />
                            <p>Top 50 C Programming Interview Questions and Answers</p>
                            <p className="readMore">Read Now</p>
                        </div>
                        <div className="mostPopularBlog">
                            <img src="https://s3.ap-south-1.amazonaws.com/blog-images-upload/blog_vinit_story.png" alt="" />
                            <p>Motivational Story : He got his first placement success after being rejected by 22 companies</p>
                            <p className="readMore">Read Now</p>
                        </div>
                        <div className="mostPopularBlog">
                            <img src="https://blog-images-upload.s3.ap-south-1.amazonaws.com/blog_top_50_interview_questions_answers.png" alt="" />
                            <p>Lyrics from the famous track aptly describes the situation of every fresher when it comes to facing the interview</p>
                            <p className="readMore">Read Now</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <div className="callBackDiv">
                        <div>
                            <h1>Talk to our experts</h1>
                            <p className="callBackDiv-para">Still Confused how PrepBytes can help you achieve your dream? Talk to our experts</p>
                            <img className="callBackDiv-img" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/call_back.svg" alt="" />
                        </div>
                        <div className="callBackForm">
                            <form>
                                <input type="text" placeholder="Name" />
                                <input type="text" placeholder="Email" />
                                <input type="text" placeholder="Phone" />
                                <textarea name="" id="" cols="30" rows="10" placeholder="Query"></textarea>
                                <button className="callBackDiv-Btn">Request a call back</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default HomePanel;
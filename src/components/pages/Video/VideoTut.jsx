import VideoCard from "./VideoCard"
import "./../../styles/VideoTutorial.css"
const VideoTut = () => {
    return (
        <div className="videoMain mt-[100px]">
            <div className="videoHeader">
                <div>
                    <p>Prepbytes Video Library</p>
                    <p className="videoInfo">Increase your knowledge with PrepBytes free videos.
                        PrepBytes video library is a repository of more than 250 videos containing videos on Competitive Programming ,
                        Language Fundamentals - C, C++,
                        Java, Data Structures and Algorithms, Aptitude, Operating System,
                        Interview Questions and much more all at one place.
                    </p>
                </div>
                <div>
                    <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/video_lib_illustration.png" alt="" />
                </div>
            </div>
            <div className="videoCategory">
                <p className="videoCategoryHeading">CATEGORIES</p>
            </div>
            <div className="videoView">
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </div>
    )
}

export default VideoTut;
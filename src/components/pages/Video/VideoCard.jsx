import "./../../styles/VideoTutorial.css"

const VideoCard = () => {
  return (
    <div className='videoCard'>
            <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/categories-image/category_competitive.png" alt="" />
            <p className='videoHeading'>Competitive Programming</p>
            <p className='videoDetails'>Competitive Programming questions solved by top rated coders</p>
            <p className='videoDetails'><img src="/youtube.png" alt="" /> 21 Videos</p>
    </div>
  )
}

export default VideoCard
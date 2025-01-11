
import React, { useEffect, useState } from 'react'
//import RatingStars from '../../common/RatingStars'
//import GetAvgRating from '../../../utils/avgRating';
import { Link } from 'react-router-dom';

const Course_Card = ({course, Height}) => {


    // const [avgReviewCount, setAvgReviewCount] = useState(0);

    // useEffect(()=> {
    //     const count = GetAvgRating(course.ratingAndReviews);
    //     setAvgReviewCount(count);
    // },[course])

console.log("instructorfirstName",course?.instructor?.firstName)
  return (
    <>
      <Link to={`/courses/${course._id}`}>
        <div className="">
          <div className="rounded-lg">
            <img
              src={course?.thumbnail}
              alt="course thumnail"
              className={`${Height} w-full rounded-xl object-cover `}
            />
          </div>
          <div className="flex flex-col gap-2 px-1 py-3">
            <p className="text-xl text-richblack-800">{course?.courseName}</p>
            <p className="text-sm text-richblack-800">
              By:{course?.instructor?.firstName || "Shradha"} {course?.instructor?.lastName ||"Sharma"}
            </p>
            <div className="flex items-center gap-2">
           {/*    <span className="text-yellow-5">{avgReviewCount || 0}</span>  
              <RatingStars Review_Count={avgReviewCount} />  
              <span className="text-richblack-400">
                {course?.ratingAndReviews?.length} Ratings
              </span>  */}
            </div>
            <p className="text-xl text-richblack-800">Rs. {course?.price}</p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Course_Card
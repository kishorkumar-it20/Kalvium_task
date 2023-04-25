import React from "react";
import './course.css';

const enrollcourse = [
    {
        image:"images/react.png",
        name:"React js",
    },
    // {
    //     image:"images/flutter.png",
    //     name:"Flutter",
    // },
    {
        image:"images/firebase.png",
        name:"Firebase",
    },
    // {
    //     image:"images/react.png",
    //     name:"React Native",
    // },
]

const Course = () =>
{
    return(
        <div>
            <div className="course-leftside-container">
                <h1>Courses Enrolled</h1>
                {
                    enrollcourse.map((user)=>
                <div className="enrollment">
                    <img src={user.image} alt=""/>
                    <div className="enrollment-right">
                        <h2>{user.name}</h2>
                        <h4>Not started</h4>
                        <button className="strt-btn">
                            Start Course
                        </button>
                    </div>
                </div>
                    )
            }
            </div>
            <div className="course-rightside">
                <h4>Yet to start..</h4>
            </div>
        </div>
    )
}
export default Course;
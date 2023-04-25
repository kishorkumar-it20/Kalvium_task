import React from "react";
import "./learning.css"
const startCourse = [
    {
        image:"images/c.png",
        name:"C Language",
    },
    {
        image:"images/c++ 1.png",
        name:"C++ Language",
    },
    {
        image:"images/python--v1.png",
        name:"Python Language",
    },
    {
        image:"images/php.png",
        name:"PHP",
    },

] 
const Recommeded = [
    {
        image:"images/react.png",
        name:"React js",
    },
    {
        image:"images/flutter.png",
        name:"Flutter",
    },
    {
        image:"images/firebase.png",
        name:"Firebase",
    },
    {
        image:"images/react.png",
        name:"React Native",
    },
]

const Learning = () =>
{
    return(
        <div className="left-side-container">
            <div className="start-learning">
                <h1>Start Learning</h1>
                {
                    startCourse.map((user)=>
                <div className="course">
                    <img src={user.image} alt=""/>
                    <h2>{user.name}</h2>
                    
                    <div className="details-btn">
                        <h5>Details</h5>
                    </div>
                    <div className="start-btn">
                        <h5>Enroll</h5>
                    </div>
                </div>
                )
            }
            </div>
            <div className="Recommended">
            <div className="start-learning">
                <h1>Recommeded</h1>
                {
                    Recommeded.map((user)=>
                <div className="course">
                    <img src={user.image} alt=""/>
                    <h2>{user.name}</h2>
                    
                    <div className="details-btn">
                        <h5>Details</h5>
                    </div>
                    <div className="start-btn">
                        <h5>Start</h5>
                    </div>
                </div>
                )
            }
            </div>
            </div>
        </div>
    )
}
export default Learning;
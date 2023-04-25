import React from "react";
import'./test.css'

const Testtaken = [
    
    {
        image:"images/c.png",
        name:"C Language",
        ques: "Mcq questions"
    },
    {
        image:"images/c++ 1.png",
        name:"C++ Language",
        ques: "Mcq questions"
    },
    {
        image:"images/python--v1.png",
        name:"Python Language",
        ques: "Programming"
    },
    {
        image:"images/php.png",
        name:"PHP",
        ques: "Mcq questions"
    },
    
]

const Test = ()=>
{
    return(
        <div>
            <div className="test-container">
                <h1>Start To Test Your Skill</h1>
                {
                    Testtaken.map((ttest)=>
                <div className="tests-container">
                    <img src={ttest.image} alt=""/>
                    <h1>{ttest.name}</h1>
                    <h4>{ttest.ques}</h4>
                    <button className="take-btn">
                        Take Test
                    </button>
                </div>
                    )
}
            </div>
        </div>
    )
}
export default Test;
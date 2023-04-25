import React from "react";
import './mainnav.css';
import { Link } from "react-router-dom";

const Mainavbar = () =>
{
    return(
        <div>
            <div className="top">
                <div className="topCenter">
                <h1>Kalvium</h1>
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">
                            COURSES
                        </Link>              
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/Enroll">
                            ENROLLED
                        </Link>
                            
                    </li>
                    <li className="topListItem">
                    
                        <Link className="link" to="/Test">
                            SKILL-TEST 
                        </Link>
                    
                    </li>
                    <li className="topListItem" >
                    
                        <Link className="link" to="/Platform">
                            START CODE
                        </Link>
                    
                    </li>
                </ul>
                </div>
                <div className="topRight">
                    {
                (
                    
                    <img
                        className="topImg"
                        src="https://m.media-amazon.com/images/M/MV5BODhjMWJlZjctY2Y4Yy00ZTRhLTkzYjAtNjNlOTU1MzI1MzQ2XkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_.jpg"
                        alt=""
                    />
                
                )}
                
                </div>
            </div>
        </div>
    )
}

export default Mainavbar;
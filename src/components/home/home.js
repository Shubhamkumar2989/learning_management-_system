import React from 'react'
import {Link} from 'react-router-dom'
import './home.style.client.css'

export default () =>
    <div className="main-content container">
        <div className="main-text">
            <h1>Welcome to Learn Up Academy</h1>
            <p>
                An Online Learning Management System Website.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
            </p>
        </div>
        <Link to="/courses/table">
            <button className="course-manager">
                Courses in Table 
                [Click Here..]
            </button>
        </Link>
        <Link to="/courses/grid">
            <button className="course-manager">
                Courses in Grid 
                 [Click Here..]
            </button>
        </Link>
    </div>

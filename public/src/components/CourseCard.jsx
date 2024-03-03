import React, { useEffect } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom'

export function CourseCard({course}) {

    // const courseId = course._id;
    
    // const config = {
    //     headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    // }

    // useEffect(() => {
    //     axios.get('http://localhost:3000/api/v1/courses/${courseId}', config)
    //     .then(res => {
    //         console.log(res.data);
    //     })
    // },[]);

    return (
        <div className="flex ">
            <div className="flex-1 bg-black p-2 border mb-2 mr-2">
                <Link to={`blog/${course._id}`}>
                    <h1>{course.title}</h1>
                    <p>{course.description}</p>
                    <p>{course.instructor}</p>
                    <p>{course._id}</p>
                </Link>
            </div>
        </div>
    )
}
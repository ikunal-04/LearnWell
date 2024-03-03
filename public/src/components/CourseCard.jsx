import React, { useEffect } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom'

export function CourseCard({course}) {

    return (
        <div className="flex">
            <div className="flex-1 bg-[#ECF9FF] text-black p-2 border mb-2 mr-2 rounded-xl">
                <Link to={`/blog/${course._id}`}>
                    <h1 className='text-3xl shadow rounded-xl max-w-full p-1 mb-2 font-mono font-bold'>{course.title}</h1>
                    <p className='mb-1'>By: {course.instructor}</p>
                    <p>Description: {course.description}</p>
                </Link>
            </div>
        </div>
    )
}
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {SpinnerComp} from "../components/SpinnerComp";

function FullBlog() {
    const [blog, setBlog] = useState(null);
    const {id} = useParams();
   
    const config = {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    }
    
    useEffect(() => {
        axios.get(`https://learn-well-hr2x.vercel.app/api/v1/courses/${id}`, config)
        .then(res => {
            console.log(res.data.course);
            setBlog(res.data.course);
        }).catch(error => {
            console.log("Error fetching course: ", error);
        })
    },[id]);

    if (!blog) {
        return (
            <div className='flex justify-center bg-black h-screen'>
                <div className='flex flex-col justify-center'>
                    <SpinnerComp />
                </div>
            </div>
        )
    }

    return (
        <div className='h-screen bg-black p-4'>
            <div className='flex justify-center text-white font-mono'>
                <div className=''>
                    <div className='text-8xl mb-4'>
                        {blog.title}
                    </div>
                    <div className='text-lg pl-2'>
                        <p>By: {blog.instructor}</p>
                    </div>
                    <div className='text-slate-400 text-xl pl-2'>
                        <p>{blog.description}</p>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <div className='text-white h-max font-mono text-lg'>
                    <p>
                        {blog.material}
                    </p>
                </div>
            </div>
        </div>
        
    )
}

export default FullBlog;
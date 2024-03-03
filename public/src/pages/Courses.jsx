import { Button } from "../components/Button";
import {useState, useEffect} from "react";
import axios from "axios";
import CreateCourseModal from "./CreateCourse";
import { CourseCard } from "../components/CourseCard";
import {SpinnerComp} from "../components/SpinnerComp";

function Courses() {
    const [courses, setCourses] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const config = {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    }

    useEffect(() => {
        axios.get("https://learn-well-hr2x.vercel.app/api/v1/courses/", config)
        .then(async (response) => {
          setCourses(response.data.courses);
        })
        .catch((error) => {
            console.log(error);
        })
    },[])

    return (
        <div className="h-screen bg-black text-white">          
            <div className="max-w-screen-lg mx-auto">     
                <div>
                    <div className="sticky top-0 pt-3">
                        <Button label="Create" typeb="button" onClick={() => setShowModal(true)}/>
                    </div>
                    {showModal && <CreateCourseModal onClose={() => setShowModal(false)}/>}
                    <div className="grid grid-cols-4 gap-4">
                        {courses.length > 0 ?
                            courses.map(function (course, index) {
                                return (<div key={index} className="col-span-1">
                                    <CourseCard course={course}/>
                                </div>)
                            }) : <SpinnerComp />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses;
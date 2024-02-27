import { Button } from "../components/Button";
import {useState, useEffect} from "react";
import axios from "axios";
import CreateCourseModal from "./CreateCourse";

function Courses() {
    const [courses, setCourses] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const config = {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    }

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/courses/", config)
        .then(async (response) => {
          setCourses(response.data.courses);
        })
        .catch((error) => {
            console.log(error);
        })
    },[])

    return (
        <div className="h-full flex justify-center bg-gradient-to-r from-slate-900 to-slate-500 text-white p-5">
            <div className="">
                <div>
                    <div className="sticky top-0">
                        <Button label="Create" typeb="button" onClick={() => setShowModal(true)}/>
                    </div>
                    {showModal && <CreateCourseModal onClose={() => setShowModal(false)}/>}
                    <div className="w-full">
                        {courses.length > 0 ?
                            courses.map(function (course, index) {
                                return (<div key={index}>
                                    <h1>{course.title}</h1>
                                    <p>{course.description}</p>
                                    <p>{course.instructor}</p>
                                    <p>{course.material}</p>
                                    <br />
                                </div>)
                            }) : <p>Signup first!!</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses;
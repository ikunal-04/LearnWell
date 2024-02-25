import { Button } from "../components/Button";
import {Link} from "react-router-dom";
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
        <div>
            <Button label="Create" typeb="button" onClick={() => setShowModal(true)}/>
            {showModal && <CreateCourseModal onClose={() => setShowModal(false)}/>}
            {courses.length > 0 ?
                courses.map(function (course, index) {
                    return (<div key={index}>
                        <h1>{course.title}</h1>
                        <p>{course.description}</p>
                        <p>{course.instructor}</p>
                        <p>{course.material}</p>
                    </div>)
                }) : <p>No courses</p>
            }
        </div>
    )
}

export default Courses;
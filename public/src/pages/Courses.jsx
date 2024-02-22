import { Button } from "../components/Button";
import {Link} from "react-router-dom";

function Courses({courses}) {

    return (
        <div>
            <Link to={'/create'}>
                <Button label="Create" typeb="button"/>
            </Link>
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
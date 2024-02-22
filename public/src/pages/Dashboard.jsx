import {Heading} from "../components/Heading";
import {SubHeading} from "../components/SubHeading";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

function Dashboard() {

    return (
        <div>
            <Heading title="Collaborative-Learning"/>
            <SubHeading title="Learn together, Grow togther..."/>
            <Link to={'/courses'}>
                <Button label="Courses" typeb="button"/>
            </Link>
            <Link to={'/communities'}>
                <Button label="Communities" typeb="button"/>
            </Link>
        </div>
    )
}

export default Dashboard;
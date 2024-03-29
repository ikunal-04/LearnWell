import { Button } from "../components/Button";
import { Link } from "react-router-dom";

function Dashboard() {

    return (
        <div className="h-screen bg-black text-white">
        <div className="px-2">
            <div className="flex justify-between shadow-xl h-14">
                <div className="flex flex-col justify-center text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-600 to-indigo-600 sm:ml-4">
                    <Link to={'/dashboard'}>
                        LearnWell
                    </Link>  
                </div>
            <div className="flex flex-col justify-center">
                <div className="flex sm:mr-4 mt-2">
                    <Link to="/">
                        <Button label="Logout" typeb="button"/>
                    </Link>
                </div>
            </div>            
        </div>
            </div>
            <div className="flex justify-center mt-36">
                <div className="flex flex-col items-center">
                    <div className="text-6xl py-1 sm:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-600 to-indigo-600 sm:py-2 mb-7">
                        LearnWell
                    </div>
                    <div className="flex text-2xl font-normal text-white lg:text-xl justify-center mb-7">
                        Learn together, grow together
                    </div>
                    <div className="flex justify-center gap-10">
                        <Link to={'/courses'}>
                            <Button label="Courses" typeb="button"/>
                        </Link>
                        <Link to={'/communities'}>
                            <Button label="Whiteboard" typeb="button"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

function Dashboard() {

    return (
        <div className="h-screen bg-gradient-to-r from-slate-900 to-slate-500 text-white">
        <div>
            <div className="flex justify-between shadow-xl h-14">
                <div className="flex flex-col justify-center text-xl ml-4">
                    <Link to={'/dashboard'}>
                        LearnWell
                    </Link>  
                </div>
            <div className="flex flex-col justify-center">
                <div className="flex  mr-4 mt-2">
                    
                    <Link to="/">
                        <Button label="Logout" typeb="button"/>
                    </Link>
                </div>
            </div>            
        </div>
            </div>
            <div className="flex justify-center mt-36">
                <div className="flex flex-col items-center">
                    <div className="text-9xl font-bold py-2 mb-7">
                        LearnWell
                    </div>
                    <div className="flex text-2xl font-normal text-white lg:text-xl justify-center mb-5">
                        Learn together, grow together
                    </div>
                    <div className="flex justify-center gap-10">
                        <Link to={'/courses'}>
                            <Button label="Courses" typeb="button"/>
                        </Link>
                        <Link to={'/communities'}>
                            <Button label="Communities" typeb="button"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
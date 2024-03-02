import {Appbar} from "../components/Appbar"
import image from "../assets/learning_communities_logo.png"

function Homepage() {
    return (
        <div className="h-screen bg-gradient-to-r from-slate-900 to-slate-500 text-white">
            <div className="">
                <Appbar />
            </div>
            <div className="flex flex-col justify-center mt-36">
                <div className="flex justify-center text-9xl font-bold py-2 mb-7">
                    LearnWell
                </div>
                <div className="flex justify-center">
                    <p className="text-lg h-max w-3/4">A comphrehensive learning and sharing platform for students and teachers.
                    Here student's themselves can share knowledge using the courses functionality by creating blogs with the community. And can also can communicate with the communities too.</p>
                </div>
                {/* <div className="">
                    <img className="ml-6 w-screen h-96" src={image} alt="logo" />
                </div> */}
            </div>
        </div>
    )
}

export default Homepage;
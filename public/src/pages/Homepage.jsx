import {Appbar} from "../components/Appbar"


function Homepage() {
    return (
        <div className="h-screen bg-black text-white">
            <div className="">
                <Appbar />
            </div>
            <div className="flex flex-col justify-center mt-36">
                <div className="flex justify-center text-9xl font-bold py-2 mb-7">
                    LearnWell
                </div>
                <div className="flex justify-center">
                    <p className="text-lg h-max w-3/5">A comphrehensive learning and sharing platform for students and teachers.
                    Here student's themselves can share knowledge using the courses functionality by creating blogs with the community. And can also can communicate with the communities too.</p>
                </div>
            </div>
        </div>
    )
}

export default Homepage;
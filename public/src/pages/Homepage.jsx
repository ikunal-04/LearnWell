import {Appbar} from "../components/Appbar"


function Homepage() {
    return (
        <div className="h-screen bg-black text-white">
            <div className="">
                <Appbar />
            </div>
            <div className="flex flex-col justify-center mt-36">
                <div className="flex justify-center text-9xl font-bold py-2 mb-7 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-600 to-indigo-600">
                    LearnWell
                </div>
                <div className="flex justify-center">
                    <p className="text-lg h-max w-3/5">
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-600 to-indigo-600">LearnWell</span> is Collaborative Learning web-based application designed to facilitate collaborative learning experiences among learners. Currently, the platform focuses on providing a wide range of courses in the form of blogs covering any topic or subject, allowing students to enroll and engage in interactive learning experiences. 
                    Collaborative Learning Platform aims to empower students in their learning journey and foster a collaborative learning community.</p>
                </div>
            </div>
        </div>
    )
}

export default Homepage;
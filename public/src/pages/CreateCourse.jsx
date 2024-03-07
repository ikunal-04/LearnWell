import {Heading} from "../components/Heading";
import {Input} from "../components/Input";
import {Button} from "../components/Button";
import {useState} from "react";
import axios from "axios";
import { XCircle } from 'lucide-react';

function CreateCourseModal({onClose}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [instructor, setInstructor] = useState("");
    const [material, setMaterial] = useState("");

    function reloadPage() {
        var currentDocumentTimestamp =
        new Date(performance.timing.domLoading).getTime();
        var now = Date.now();
        var tenSec = 10 * 1000;
        var plusTenSec = currentDocumentTimestamp + tenSec;
        if (now > plusTenSec) {
        location.reload();
        } else {}
       }

    async function handleSubmission(e) {
        e.preventDefault();
        console.log("Form Values");
        console.log(title);
        console.log(description);
        console.log(instructor);
        console.log(material);
        const response = await axios.post("https://learn-well-hr2x.vercel.app/api/v1/courses/create", {
            title: title,
            description: description,
            instructor: instructor,
            material: material
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(async (res) => {
            console.log(res);
            onClose();
            reloadPage();
        })
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className=" text-black">
                
                <div className="bg-[#ECF9FF] rounded-xl px-2 py-2 gap-2 sm:px-20 sm:py-10 flex flex-col sm:gap-5 items-center sm:mx-1">
                <button onClick={onClose} className="place-self-end"><XCircle size={30}/></button>
                    <Heading title="Create blog!"/>
                    <div className="text-lg font-normal text-black lg:text-xl">
                        Create course for free!!
                    </div>
                    <form onSubmit={handleSubmission}>
                        <Input label="Title" placeholder="Title" onChange={(e) => 
                            setTitle(e.target.value)}/>
                        <Input label="Description" placeholder="Description" onChange={(e) => 
                            setDescription(e.target.value)}/>
                        <Input label="Instructor" placeholder="Instructor" onChange={(e) => 
                            setInstructor(e.target.value)}/>
                        <div>
                            <div className="text-sm font-medium text-left py-2">
                                <label>Material</label>
                            </div>
                            <textarea type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" cols="50" rows="5" placeholder="Material" onChange={(e) => setMaterial(e.target.value)}/>
                        </div>  
                        <div className="mt-5">
                            <Button label="Create" typeb="submit"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateCourseModal;

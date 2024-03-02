import {Heading} from "../components/Heading";
import {SubHeading} from "../components/SubHeading";
import {Input} from "../components/Input";
import {Button} from "../components/Button";
import {useState} from "react";
import axios from "axios";
import { X } from 'lucide-react';

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
        const response = await axios.post("http://localhost:3000/api/v1/courses/create", {
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
            <div className="mt-5 flex flex-col gap-2 text-black">
                <button onClick={onClose} className="place-self-end"><X size={30}/></button>
                <div className="bg-gradient-to-r from-slate-500 to-slate-800 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-2">
                    <Heading title="Create blog!"/>
                    <div className="text-lg font-normal text-black lg:text-xl">
                        Create course for free!!
                    </div>
                    <form onSubmit={handleSubmission}>
                        <Input label="Title" placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
                        <Input label="Description" placeholder="Description" onChange={(e) => setDescription(e.target.value)}/>
                        <Input label="Instructor" placeholder="Instructor" onChange={(e) => setInstructor(e.target.value)}/>
                        <Input label="Material" placeholder="Material" onChange={(e) => setMaterial(e.target.value)}/>
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

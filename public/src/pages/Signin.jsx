import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import { Appbar } from "../components/Appbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleChange = (e, setter) => {
        const value = e.target.value;
        console.log(value);
        setter(value);
    }

    async function handleSignin(e) {
        e.preventDefault();
        console.log("Form Values");
        console.log(username);
        console.log(password);
            const response = await axios.post("https://learn-well-hr2x.vercel.app/api/v1/user/signin", {
                username: username,
                password: password,
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(async (res) => {
            // console.log(res.data.token)
            axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
            localStorage.setItem('token', res.data.token);
            navigate('/dashboard'); 
        })
    }

    return (
        <div className="bg-black h-screen ">
            <div className="text-white">
                <Appbar />
            </div>
            <div className="flex justify-center mt-32">
                <div className="flex flex-col justify-center">
                    <div className=" rounded-3xl bg-white w-96 text-center p-2 h-max px-4">  
                        <Heading title="Sign-in" />
                        <SubHeading title="Welcome back!" />
                        <form onSubmit={handleSignin}>
                            <Input label="Username" placeholder="Enter your username" onChange={(e) => handleChange(e, setUsername)}/>
                            <Input label="Password" placeholder="Enter your password" onChange={(e) => handleChange(e, setPassword)}/>
                            <div className="mt-4">
                                <Button label="Sign In" typeb="submit"/>
                            </div>
                        </form> 
                        <BottomWarning message="Don't have an account?" buttonText="Sign Up" to="/signup" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin;
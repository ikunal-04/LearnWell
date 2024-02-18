import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] =  useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function handleRegister(e) {
        e.preventDefault();
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                username: username,
                email: email,
                password: password,
                mobile: mobile
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((response) => {
                console.log(response.data);
            });
            // console.log(response.data.token);
            localStorage.setItem('token', response.data.token);
            navigate('/signin')
    }

    return (
        <div className="bg-gray-500 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className=" rounded-3xl bg-white w-96 text-center p-2 h-max px-4">  
                    <Heading title="Sign-Up" />
                    <SubHeading title="Create your account" />
                    <form onSubmit={handleRegister}>
                        <Input label="Username" placeholder="Enter your username" onChange={e => {
                            setUsername(e.target.value);
                        }}/>
                        <Input label="Email" placeholder="Enter your email" onChange={e => {
                            setEmail(e.target.value);
                        }}/>
                        <Input label="Mobile" placeholder="Enter your mobile" onChange={e => {
                            setMobile(e.target.value);
                        }}/>
                        <Input label="Password" placeholder="Enter your password" onChange={e => {
                            setPassword(e.target.value);
                        }}/>
                        <div className="mt-4">
                            <Button label="Sign Up" onClick={() => {
                                navigate('/signin');    
                            }}/>
                        </div>
                    </form> 
                    <BottomWarning message="Already have an account?" buttonText="Sign In" to="/signin" />
                </div>
            </div>
        </div>
    )
}

export default Signup;
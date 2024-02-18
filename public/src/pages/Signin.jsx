import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";

function Signin() {
    return (
        <div className="bg-gray-500 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className=" rounded-3xl bg-white w-96 text-center p-2 h-max px-4">  
                    <Heading title="Sign-in" />
                    <SubHeading title="Welcome back!" />
                    <form action="">
                        <Input label="Username" placeholder="Enter your username" />
                        <Input label="Password" placeholder="Enter your password" />
                        <div className="mt-4">
                            <Button label="Sign In" />
                        </div>
                    </form> 
                    <BottomWarning message="Don't have an account?" buttonText="Sign Up" to="/signup" />
                </div>
            </div>
        </div>
    )
}

export default Signin;
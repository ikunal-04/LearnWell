import { Button } from "./Button"
import { Link } from 'react-router-dom'

export function Appbar() {

    function logout() {
        localStorage.removeItem('token');
    }

    return (
        <div className="flex justify-between shadow-xl h-14">
            <div className="flex flex-col justify-center text-xl ml-4">
                <Link to={'/'}>
                    LearnWell
                </Link>   
            </div>
            <div className="flex flex-col justify-center">
                <div className="flex gap-4 mr-4 mt-2">
                    <Link to="/signin">
                        <Button label="Login" typeb="button" />
                    </Link>
                    <Link to="/signup">
                        <Button label="Signup" typeb="button" onClick={logout}/>
                    </Link>
                </div>
            </div>            
        </div>
    )
}

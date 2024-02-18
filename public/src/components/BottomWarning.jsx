import { Link } from "react-router-dom"

export function BottomWarning({message, buttonText, to}){
    return (
        <div className="py-2 text-sm flex justify-center">
            <div>
                {message}
            </div>
            <Link className="underline pl-1 cursor-pointer" to={to}>
                {buttonText}
            </Link>
        </div>
    )
}
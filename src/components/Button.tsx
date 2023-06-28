import { ButtonProps } from "../interfaces/props"
import { Entry } from "../interfaces/types"

const Button = ({ className, children, color = "", size = "", onClick }: ButtonProps) => {
    const colorVariants: Entry = {
        "gray-100": "text-gray border-transparent bg-transparent",
        "white-100": "text-white border-blue bg-blue",
        "red-100": "text-red border-red"
    }
    const sizeVariants: Entry = {
        "base": "h-10 px-5 font-medium border rounded-md"
    }
    const classList = `${sizeVariants[size] ?? ""} ${colorVariants[color] ?? ""} ${className}`
    
    return (
        <button className={classList} onClick={onClick}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    className: "",
    color: ""
}

export { Button }
import { Variant, ButtonProps } from "../interfaces/types"

const Button = ({ className, children, color, size, onClick }: ButtonProps) => {
    const colorVariants: Variant = {
        "gray-100": "text-gray border-transparent bg-transparent",
        "white-100": "text-white border-blue bg-blue",
        "red-100": "text-red border-red"
    }
    const sizeVariants: Variant = {
        "base": "h-10 px-5 font-medium border rounded-md"
    }
    const classList = `${sizeVariants[size ?? ""] ?? ""} ${colorVariants[color ?? ""] ?? ""} ${className}`
    
    return (
        <button className={classList} onClick={onClick}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    className: ""
}

export { Button }
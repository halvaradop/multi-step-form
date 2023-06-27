import { forwardRef } from "react"
import { InputProps, Variant } from "../interfaces/types"

const Input = forwardRef <HTMLInputElement, InputProps> (({ className, classLabel, type, value, name, id, color, size, children, placeholder, onClick, onChange }: InputProps, ref) => {
    const colorVariants: Variant = {
        "gray-100": "text-gray font-medium placeholder-gray border-gray-100 placeholder:font-bold focus:ring-1 focus:ring-blue-100 focus:border-blue-100 valid:text-blue invalid:text-red invalid:border-red invalfo:border-red invalfo:text-red invalfo:ring-red"
    }
    const sizeVariants: Variant = {
        base: "h-10 px-5 text-base border rounded-md"
    }
    const classList = `${sizeVariants[size ?? ""] ?? ""} ${colorVariants[color ?? ""] ?? ""} ${className} focus:outline-none`
    const nameTagElement = id ?? name
    return (
        <label className={classLabel} htmlFor={nameTagElement}>
            <input 
                className={classList}
                type={type}
                value={value}
                name={nameTagElement}
                id={nameTagElement}
                ref={ref}
                placeholder={placeholder}
                onClick={onClick}
                onChange={onChange}
            />
            {children}
        </label>
    )
})

Input.defaultProps = {
    className: "",
    classLabel: "",
    type: "text",
    placeholder: "..."
}

export { Input }
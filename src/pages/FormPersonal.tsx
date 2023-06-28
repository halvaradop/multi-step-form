import { useEffect, useRef, useState, ChangeEvent, MutableRefObject } from "react"
import { Input } from "../components/Input"
import { FormPersonalProps, PersonalForm, SetAttributeInput } from "../interfaces/types"

const initialForm: PersonalForm = { name: "", email: "", number: "" }

const FormPersonal = ({ isNext, setIsNext }: FormPersonalProps) => {
    const nameRef = useRef <HTMLInputElement | null> (null)
    const emailRef = useRef <HTMLInputElement | null> (null)
    const numberRef = useRef <HTMLInputElement | null> (null)
    const [formData, setFormData] = useState <PersonalForm> (initialForm)

    useEffect(() => {
        if(isNext !== "Incomplete") {
            const { number } = formData
            if(isValidity(nameRef) && isValidity(emailRef) && number.length > 0) {
                setIsNext("Successful")
            }else {
                if(isValidity(nameRef)) 
                    setAttributeNode({ node: nameRef.current, attribute: "data-required", value: "true" })
                if(isValidity(emailRef)) 
                    setAttributeNode({ node: emailRef.current, attribute: "data-required", value: "true" })
                if(number.length <= 0) 
                    setAttributeNode({ node: numberRef.current, attribute: "data-required", value: "true" })
            }
        }
    }, [isNext])

    
    const handleChange = (event: ChangeEvent <HTMLInputElement> ) => {
        const target = event.target as HTMLInputElement
        if((target.name === "name" && isValidity(nameRef)) || (target.name === "number" && target.value.length > 0) || (target.name === "email" && isValidity(emailRef))) {
            setAttributeNode({ node: target, attribute: "data-required", value: "false" })
        }
        setFormData({ ...formData, [target.name]: target.value })
    }
    
    const setAttributeNode = ({ node, attribute, value }: SetAttributeInput) => {
        node?.setAttribute(attribute, value)
    }

    const isValidity = (node: MutableRefObject <HTMLInputElement | null> ) => {
        return node.current?.checkValidity()
    }

    return (
        <>
            <h1 className="text-blue text-3xl font-bold">Personal info</h1>
            <p className="mt-4 mb-5 text-gray text-lg font-medium">Please provide your name, email, address, and phone number.</p>
            <form className="flex flex-col gap-y-5">
                <Input classLabel="flex flex-col relative" className="peer w-full" value={formData.name} color="gray-100" size="base" name="name" ref={nameRef}  placeholder="e.g. Stephen King" onChange={handleChange}>
                    <span className="-order-1 text-blue text-base font-medium">Name</span>
                    <span className="text-red text-sm font-bold invisible absolute top-1 right-0 peer-data-[required=true]:visible">This field is required</span>
                </Input>
                <Input classLabel="flex flex-col relative" className="peer w-full" type="email" value={formData.email} color="gray-100" size="base" name="email" ref={emailRef}  placeholder="e.g.stephenking@lorem.com" onChange={handleChange}>
                    <span className="-order-1 text-blue text-base font-medium">Email Address</span>
                    <span className="text-red text-sm font-bold invisible absolute top-1 right-0 peer-data-[required=true]:visible">This field is required</span>
                </Input>
                <Input classLabel="flex flex-col relative" className="peer w-full" type="number" value={formData.number} color="gray-100" size="base" name="number" ref={numberRef}  placeholder="e.g. +1 234 567 890" onChange={handleChange}>
                    <span className="-order-1 text-blue text-base font-medium">Phone Number</span>
                    <span className="text-red text-sm font-bold invisible absolute top-1 right-0 peer-data-[required=true]:visible">This field is required</span>
                </Input>
            </form>
        </>
    )
}

export { FormPersonal }
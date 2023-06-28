import { useState, useEffect, ChangeEvent } from "react"
import { Input } from "../components/Input"
import { Picks, PicksAddProps } from "../interfaces/types"

const PicksAdd = ({ isNext, setIsNext, onUpdatePicks }: PicksAddProps) => {
    const [inputsChecked, setInputsChecked] = useState <Array <Picks>> ([])

    useEffect(() => {
        if(isNext !== "Incomplete") {
            if(inputsChecked.length > 0) {
                onUpdatePicks(inputsChecked)
                setIsNext("Successful")
            }
        }
    }, [isNext])

    const handleChange = (event: ChangeEvent <HTMLInputElement>) => {
        const target = event.target
        if(target.checked) {
            setInputsChecked([...inputsChecked, { title: target.value, price: target.getAttribute("data-price") ?? ""}])
        }else {
            setInputsChecked(inputs => inputs.filter(value => value.title !== target.value))
        }
    }

    return (
        <>
            <h1 className="text-blue text-3xl font-bold">Picks add-ons</h1>
            <p className="mt-4 mb-5 text-gray text-lg font-medium">Add-ons help enhance your gaming experience.</p>
            <form className="flex flex-col gap-y-5">
                <Input classLabel="card-plans align-center text-sm is-checked:border-blue-100 hover:cursor-pointer" className="w-5 accent-blue-100" type="checkbox" value="Online service" data-price="+$1/mo" name="onlineService" onChange={handleChange}>
                    <div className="ml-5 mr-auto pr-2 sm:ml-6">
                        <h2 className="text-blue text-lg font-bold">Online service</h2>
                        <p>Access to multiplayer games</p>
                    </div>
                    <p className="text-blue-100 font-medium">+$1/mo</p>
                </Input>
                <Input classLabel="card-plans align-center text-sm is-checked:border-blue-100 hover:cursor-pointer" className="w-5 accent-blue-100" type="checkbox" value="Larget storage" data-price="+$2/mo" name="largetStorage" onChange={handleChange}>
                    <div className="ml-5 mr-auto pr-2 sm:ml-6">
                        <h2 className="text-blue text-lg font-bold">Larget storage</h2>
                        <p>Extra 1TB of cloud save</p>
                    </div>
                    <p className="text-blue-100 font-medium">+$2/mo</p>
                </Input>
                <Input classLabel="card-plans align-center text-sm is-checked:border-blue-100 hover:cursor-pointer" className="w-5 accent-blue-100" type="checkbox" value="Customizable profile" data-price="+$2/mo" name="customizableProfile" onChange={handleChange}>
                    <div className="ml-5 mr-auto pr-2 sm:ml-6">
                        <h2 className="text-blue text-lg font-bold">Customizable profile</h2>
                        <p>Custom theme on your profile</p>
                    </div>
                    <p className="text-blue-100 font-medium">+$2/mo</p>
                </Input>
            </form>
        </>
    )
}

export { PicksAdd }
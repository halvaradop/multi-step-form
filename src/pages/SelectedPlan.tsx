import { useState, useRef, useEffect, MouseEvent } from "react"
import { CardSelectPlan } from "../components/CardSelectPlan";
import { selectPlans } from "../utils/data";
import { SelectedPlanProps } from "../interfaces/types";

const SelectedPlan = ({ isNext, setIsNext }: SelectedPlanProps ) => {
    const planRef = useRef <HTMLElement | null> (null)
    const [isMonthly, setIsMonthly] = useState(true)

    useEffect(() => {
        if(isNext !== "Incomplete") {
            if(planRef.current) {
                setIsNext("Successful")
            }
        }
    }, [isNext])


    const handleChangePlan = (event: MouseEvent <HTMLElement> ) => {
        const target = event.currentTarget as HTMLElement
        if(planRef.current) 
            planRef.current.classList.remove("is-active")
        if(planRef.current !== target) {
            planRef.current = target
            target.classList.add("is-active")
        }else {
            planRef.current = null
        }
    }

    const handleClickTypePlan = (event: MouseEvent <HTMLSpanElement>) => {
        const target = event.currentTarget as HTMLElement
        if(target.classList.contains("justify-start")) {
            target.classList.replace("justify-start", "justify-end")
        }else {
            target.classList.replace("justify-end", "justify-start")
        }
        setIsMonthly(!isMonthly)
    }

    return (
        <>
            <h1 className="text-blue text-3xl font-bold">Select your plan</h1>
            <p className="mt-4 mb-5 text-gray text-lg font-medium">You have the option of monthly or yearly billing.</p>
            <section className="flex flex-col gap-y-5">
                {selectPlans.length > 0? (
                    selectPlans.map(({ img, title, price }, key) => (
                        <CardSelectPlan key={key} img={img} title={title} price={isMonthly? `${price}/mo`: `${price}0/yr` } onClick={handleChangePlan}>
                            {!isMonthly && <span className="text-blue text-sm font-medium">2 months free</span>}
                        </CardSelectPlan>
                    ))
                ) : ""}
            </section>
            <section className="mt-5 py-2 flex items-center justify-center gap-x-3 text-lg font-medium rounded-md bg-magnolia sm:mt-7">
                <h2 className="text-blue">Monthly</h2>
                <span className="w-10 h-5 p-1 flex items-center justify-start rounded-full bg-blue hover:cursor-pointer" onClick={handleClickTypePlan}>
                    <span className="h-full aspect-square rounded-full bg-white"></span>
                </span>
                <h2 className="text-gray">Yerly</h2>                
            </section>
        </>
    )
}

export { SelectedPlan }
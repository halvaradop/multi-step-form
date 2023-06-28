import { useState, useRef, useEffect, MouseEvent } from "react"
import { PlanOptionCard } from "../components/PlanOptionCard";
import { selectPlans } from "../utils/data";
import { PlanSelectionPageProps } from "../interfaces/props";

const PlanSelectionPage = ({ isNext, setIsNext, onUpdatePlan }: PlanSelectionPageProps ) => {
    const planRef = useRef <HTMLElement | null> (null)
    const [isMonthly, setIsMonthly] = useState(true)

    useEffect(() => {
        if(isNext !== "Incomplete") {
            if(planRef.current) {
                const { price, title } = planRef.current.dataset
                setIsNext("Successful")
                onUpdatePlan({ title: title ?? "", price: price ?? "" })
            }
        }
    }, [isNext])


    const handleChangePlan = (event: MouseEvent <HTMLElement> ) => {
        const target = event.currentTarget
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
        const target = event.currentTarget
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
            <section className="flex flex-col gap-y-5 base:grid base:grid-cols-3 base:gap-x-5">
                {selectPlans.length > 0? (
                    selectPlans.map(({ img, title, priceMonth, priceYear }, key) => (
                        <PlanOptionCard className="base:p-4 base:flex-col base:gap-y-7 base:leading-relaxed" key={key} img={img} title={title} price={isMonthly? priceMonth ?? "" : priceYear ?? "" } onClick={handleChangePlan}>
                            {!isMonthly && <span className="block text-blue text-sm font-medium base:mt-2 base:font-bold">2 months free</span>}
                        </PlanOptionCard>
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

export { PlanSelectionPage }
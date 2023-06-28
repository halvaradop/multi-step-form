import { useEffect } from "react"
import { FinishPageProps } from "../interfaces/types"

const parseCharacters = (str: string): number => {
    return parseInt(str.replace(/\D/g, ""))
}

const Finishing = ({ plan, isNext, setIsNext }: FinishPageProps) => {
    const { typePlan, picks } = plan
    const sub = typePlan.price
    const type = sub.substring(sub.length -2) 
    const typeValue = type === "mo"? "Monthly" : "Yearly"
    let sum = parseCharacters(typePlan.price)

    useEffect(() => {
        if(isNext !== "Incomplete") {
            setIsNext("Successful")
        }
    }, [isNext])

    return (
        <>
            <h1 className="text-blue text-3xl font-bold">Finishiing up</h1>
            <p className="mt-4 mb-5 text-gray text-lg font-medium">Double-check everything looks OK before confirming.</p>
            {typePlan.title && typePlan.price && <section className="w-full p-4 rounded-lg bg-magnolia">
                <article className="pb-5 flex items-center justify-between text-blue text-lg font-bold border-b border-gray">
                    <h2>{typePlan.title} ({typeValue})</h2>
                    <p>{typePlan.price}</p>
                </article>
                <section className="mt-5 flex flex-col gap-y-2">
                    {picks.map(({ title, price }, key) => {
                        sum += parseCharacters(price)
                        return (
                            <div className="flex items-center justify-between text-base" key={key}>
                                <h3 className="text-gray">{title}</h3>
                                <p className="text-blue">{price}</p>
                            </div>
                        )
                    })}
                </section>
            </section>}
            <article className="mt-6 flex items-center justify-between ">
                <h4 className="text-gray text-base font-medium">Total (per {typeValue === "Monthly"? "month": "year"})</h4>
                <p className="text-blue-100 text-xl font-bold">{!isNaN(sum)? `$${sum}/${type}` : "$0"}</p>
            </article>
        </>
    )
}

export { Finishing }
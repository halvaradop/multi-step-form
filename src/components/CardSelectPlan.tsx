import { CardSelectPlanProps } from "../interfaces/types"

const CardSelectPlan = ({ className = "", img, title, price, children, onClick }: CardSelectPlanProps) => {
    return (
        <article className={`card-plans items-start justify-start gap-x-5 is-plan:border-blue-100 is-plan:bg-magnolia hover:cursor-pointer sm:p-5 ${className}`} data-price={price} data-title={title} onClick={onClick}>
            <img src={img} alt="icon of a plan" />
            <div>
                <h2 className="text-blue text-xl/5 font-bold">{title}</h2>
                <p className="text-gray text-base font-medium">{price}</p>
                {children}
            </div>
        </article>
    )
}

export { CardSelectPlan }
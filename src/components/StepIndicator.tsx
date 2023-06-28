import { StepIndicatorProps } from "../interfaces/props"

const StepIndicator = ({ index, title }: StepIndicatorProps) => {
    return (
        <div className="base:flex base:items-center base:gap-x-5">
            <span className="w-8 h-8 text-white font-bold grid place-content-center border border-white rounded-full">{index}</span>
            <div className="hidden base:uppercase base:block">
                <p className="text-gray-100 text-sm/4 font-medium">Step {1}</p>
                <h2 className="text-white text-base font-bold">{title}</h2>
            </div>
        </div>
    )
}

export { StepIndicator }

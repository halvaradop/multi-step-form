import { ChangeEvent, Dispatch, SetStateAction } from "react"
import { Clickacle, Customizable, PlanData, Option, OptionPlan, User, Variant } from "./types";

export interface ButtonProps extends Variant, Customizable, Clickacle <HTMLButtonElement> {}

export interface InputProps extends Variant, Customizable, Clickacle <HTMLInputElement> {
    classLabel?: string,
    type?: string,
    value: string,
    name: string,
    id?: string,
    placeholder?: string,
    onChange?: (event: ChangeEvent <HTMLInputElement> ) => void
}

export interface PlanOptionCardProps extends OptionPlan, Customizable, Clickacle <HTMLElement> {}

export interface PageProps {
    isNext?: string,
    setIsNext: Dispatch <SetStateAction <string> >
}

export interface LayoutProps extends PageProps {
    isNextSection: boolean,
    setIsNextSection: Dispatch <SetStateAction <boolean>>,
}

export interface UserFormPageProps extends PageProps {
    onUpdateUserForm: (user: User) => void
}

export interface PlanSelectionPageProps extends PageProps {
    onUpdatePlan: (plan: OptionPlan) => void
}
export interface OptionsSelectionPageProps extends PageProps {
    onUpdateOptions: (picks: Array <Option> ) => void
}

export interface StepIndicatorProps {
    index: number,
    title: string
}

export interface PlanTotalPage extends PageProps {
    plan: PlanData
}
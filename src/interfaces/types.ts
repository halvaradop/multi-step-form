import { MouseEvent, ChangeEvent, Dispatch, SetStateAction } from "react"

export interface Click <TypeEvent> {
    onClick?: (event: TypeEvent) => void | boolean | string
}

export interface Variant {
    [key: string]: string
}

export interface ComponentVariant {
    color?: string,
    size?: string
}

export interface ComponentProps {
    className?: string,
    children?: React.ReactNode
}

export interface ButtonProps extends ComponentVariant, ComponentProps, Click <MouseEvent <HTMLButtonElement>> {}

export interface InputProps extends ComponentVariant, ComponentProps, Click <MouseEvent <HTMLInputElement>> {
    classLabel?: string,
    type?: string,
    value: string,
    name: string,
    id?: string,
    placeholder?: string,
    onChange?: (event: ChangeEvent <HTMLInputElement> ) => void
}

export interface PersonalForm {
    name: string,
    email: string,
    number: string
}

export interface Plan {
    img: string,
    title: string,
    price: Array <string> | string
}

export interface CardSelectPlanProps extends Plan, ComponentProps, Click <MouseEvent <HTMLElement>> {}

export interface PagesProps {
    isNext?: string,
    setIsNext: Dispatch <SetStateAction <string> >
}

export interface LayoutProps extends PagesProps {
    isNextSection: boolean,
    setIsNextSection: Dispatch <SetStateAction <boolean>>,
}

export interface FormPersonalProps extends PagesProps {}
export interface SelectedPlanProps extends PagesProps {}
export interface PicksAddProps extends PagesProps {}

export interface SetAttributeInput {
    node: HTMLInputElement | null,
    attribute: string,
    value: string
}
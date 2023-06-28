import { MouseEvent } from "react"

export interface Clickacle <Element> {
    onClick?: (event: MouseEvent <Element> ) => void
}

export interface Entry {
    [key: string]: string
}

export interface Variant {
    color?: string,
    size?: string
}

export interface Customizable {
    className?: string,
    children?: React.ReactNode
}

export interface User {
    name: string,
    email: string,
    number: string
}

export interface Option {
    title: string,
    price: string
}

export interface OptionPlan extends Option {
    img?: string,
    priceMonth?: string,
    priceYear?: string
}

export interface SetAttributeElement {
    node: HTMLInputElement | null,
    attribute: string,
    value: string
}

export interface PlanData {
    user: User
    typePlan: OptionPlan,
    picks: Array <Option>
}
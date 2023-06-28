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

export interface Userdata {
    name: string,
    email: string,
    number: string
}

export interface Plan {
    img?: string,
    title: string,
    price: string,
    priceMonth?: string,
    priceYear?: string
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

export interface FormPersonalProps extends PagesProps {
    onUpdateUserData: (user: Userdata) => void
}

export interface SelectedPlanProps extends PagesProps {
    onUpdateTypePlan: (plan: Plan) => void
}
export interface PicksAddProps extends PagesProps {
    onUpdatePicks: (picks: Array <Picks>) => void
}

export interface SetAttributeInput {
    node: HTMLInputElement | null,
    attribute: string,
    value: string
}

export interface IndexSectionProps {
    index: number,
    title: string
}

export interface Picks {
    title: string,
    price: string      
}

export interface MapPlan {
    user: Userdata
    typePlan: Plan,
    picks: Array <Picks>
}

export interface FinishPageProps extends PagesProps {
    plan: MapPlan
}
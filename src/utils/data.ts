import { OptionPlan } from "../interfaces/types";
import { StepIndicatorProps } from "../interfaces/props";
import arcade from "../assets/arcade.svg"
import advanced from "../assets/advanced.svg"
import pro from "../assets/pro.svg"

export const selectPlans: Array <OptionPlan> = [
    { img: arcade, title: "Arcade", price: "", priceMonth: "$9/mo", priceYear: "$9/yr" },
    { img: advanced, title: "Advanded", price: "", priceMonth: "$12/mo", priceYear: "$120/yr" },
    { img: pro, title: "Pro", price: "", priceMonth: "$15/mo", priceYear: "$15/yr" }
]

export const indexes: Array <StepIndicatorProps> = [
    { index: 1, title: "your info" },
    { index: 2, title: "select plan" },
    { index: 3, title: "add-ons" },
    { index: 4, title: "summary" },
]
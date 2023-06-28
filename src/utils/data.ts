import { IndexSectionProps, Plan } from "../interfaces/types";

export const selectPlans: Array <Plan> = [
    { img: "/src/assets/arcade.svg", title: "Arcade", price: "$9" },
    { img: "/src/assets/advanced.svg", title: "Advanded", price: "$12" },
    { img: "/src/assets/pro.svg", title: "Pro", price: "$15" }
]

export const indexes: Array <IndexSectionProps> = [
    { index: 1, title: "your info" },
    { index: 2, title: "select plan" },
    { index: 3, title: "add-ons" },
    { index: 4, title: "summary" },
]
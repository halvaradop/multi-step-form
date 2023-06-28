import { IndexSectionProps, Plan } from "../interfaces/types";

export const selectPlans: Array <Plan> = [
    { img: "/src/assets/arcade.svg", title: "Arcade", price: "", priceMonth: "$9/mo", priceYear: "$9/yr" },
    { img: "/src/assets/advanced.svg", title: "Advanded", price: "", priceMonth: "$12/mo", priceYear: "$120/yr" },
    { img: "/src/assets/pro.svg", title: "Pro", price: "", priceMonth: "$15/mo", priceYear: "$15/yr" }
]

export const indexes: Array <IndexSectionProps> = [
    { index: 1, title: "your info" },
    { index: 2, title: "select plan" },
    { index: 3, title: "add-ons" },
    { index: 4, title: "summary" },
]
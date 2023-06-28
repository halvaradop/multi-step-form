import { useState, useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { UserFormPage } from "./pages/UserFormPage" 
import { PlanSelectionPage } from "./pages/PlanSelectionPage"
import { OptionsSectionPage } from "./pages/OptionsSectionPage"
import { PlanTotalPage } from "./pages/PlanTotalPage"
import { PlanData, Option, OptionPlan, User } from "./interfaces/types"
import { ThankYouPage } from "./pages/ThankYouPage"
import { NotFoundErrorPage } from "./pages/NotFoundErrorPage"

let planInitial: PlanData = {
    user: { name: "", email: "", number: "" },
    picks: [],
    typePlan: { title: "", price: "" }
}

const App = () => {
    const [plan, setPlan] = useState <PlanData> (planInitial)
    const [isNext, setIsNext] = useState <string> ("Incomplete")
    const [isNextSection, setIsNextSection] = useState <boolean> (false)

    useEffect(() => {
        if(isNext === "Successful") {
            setIsNextSection(true)
        }
    }, [isNext])

    const handleSetUser = ({ name, number, email }: User) => setPlan({ ...plan, user: { name, number, email } })
    const handleSetPlan = ({ title, price }: OptionPlan) => setPlan({ ...plan, typePlan: { title, price }  })    
    const handleSetPicks = (picks: Array <Option>) => setPlan({ ...plan, picks })

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout isNextSection={isNextSection} setIsNextSection={setIsNextSection} setIsNext={setIsNext} /> }>
                    <Route index element={<UserFormPage isNext={isNext} setIsNext={setIsNext} onUpdateUserForm={handleSetUser} />}  />
                    <Route path="plan" element={<PlanSelectionPage isNext={isNext} setIsNext={setIsNext} onUpdatePlan={handleSetPlan} />} />
                    <Route path="picks" element={<OptionsSectionPage isNext={isNext} setIsNext={setIsNext} onUpdateOptions={handleSetPicks} />} />
                    <Route path="finishing" element={<PlanTotalPage plan={plan} isNext={isNext} setIsNext={setIsNext} />} />
                    <Route path="thanks" element={<ThankYouPage />} />
                </Route>
                <Route path="*" element={<NotFoundErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
import { useState, useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { FormInformation } from "./pages/FormInformation" 
import { SelectedPlan } from "./pages/SelectedPlan"
import { PicksAdd } from "./pages/PicksAdd"
import { Finishing } from "./pages/Finishing"
import { MapPlan, Picks, Plan, Userdata } from "./interfaces/types"
import { Thanks } from "./pages/Thanks"
import { Error404 } from "./pages/Error404"

let planInitial: MapPlan = {
    user: { name: "", email: "", number: "" },
    picks: [],
    typePlan: { title: "", price: "" }
}

const App = () => {
    const [plan, setPlan] = useState <MapPlan> (planInitial)
    const [isNext, setIsNext] = useState <string> ("Incomplete")
    const [isNextSection, setIsNextSection] = useState <boolean> (false)

    useEffect(() => {
        if(isNext === "Successful") {
            setIsNextSection(true)
        }
    }, [isNext])

    const handleSetUser = ({ name, number, email }: Userdata) => setPlan({ ...plan, user: { name, number, email } })
    const handleSetPlan = ({ title, price }: Plan) => setPlan({ ...plan, typePlan: { title, price }  })    
    const handleSetPicks = (picks: Array <Picks>) => setPlan({ ...plan, picks })


    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout isNextSection={isNextSection} setIsNextSection={setIsNextSection} setIsNext={setIsNext} /> }>
                    <Route index element={<FormInformation isNext={isNext} setIsNext={setIsNext} onUpdateUserData={handleSetUser} />}  />
                    <Route path="plan" element={<SelectedPlan isNext={isNext} setIsNext={setIsNext} onUpdateTypePlan={handleSetPlan} />} />
                    <Route path="picks" element={<PicksAdd isNext={isNext} setIsNext={setIsNext} onUpdatePicks={handleSetPicks} />} />
                    <Route path="finishing" element={<Finishing plan={plan} isNext={isNext} setIsNext={setIsNext} />} />
                    <Route path="thanks" element={<Thanks />} />
                </Route>
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
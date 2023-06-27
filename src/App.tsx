import { useState, useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { FormPersonal } from "./pages/FormPersonal"
import { SelectedPlan } from "./pages/SelectedPlan"
import { PicksAdd } from "./pages/PicksAdd"
import { Finishing } from "./pages/Finishing"

const App = () => {
    const [isNext, setIsNext] = useState <string> ("Incomplete")
    const [isNextSection, setIsNextSection] = useState <boolean> (false)

    useEffect(() => {
        if(isNext === "Successful") {
            setIsNextSection(true)
        }
    }, [isNext])

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout isNextSection={isNextSection} setIsNextSection={setIsNextSection} setIsNext={setIsNext} /> }>
                    <Route index element={<FormPersonal isNext={isNext} setIsNext={setIsNext} />}  />
                    <Route path="plan" element={<SelectedPlan isNext={isNext} setIsNext={setIsNext} />} />
                    <Route path="picks" element={<PicksAdd isNext={isNext} setIsNext={setIsNext} />} />
                    <Route path="finishing" element={<Finishing />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App


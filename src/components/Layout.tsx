import { useEffect } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { Button } from "./Button"
import { LayoutProps } from "../interfaces/types"
import bgMobile from "../assets/sidebar-mobile.svg"
import bgDesktop from "../assets/sidebar-desktop.svg"

const pathsRoutes: Array <string> = ["/", "/plan", "/picks", "/finishing"]

const Layout = ({ isNextSection, setIsNextSection, setIsNext }: LayoutProps ) => {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    useEffect(() => {
        if(isNextSection) {
            handleNavigateSection(+1)   
            setIsNext("Incomplete")
            setIsNextSection(false) 
        }
    }, [isNextSection])

    const handleNavigateSection = (jump: number) => {
        const index = pathsRoutes.findIndex(path => path === pathname)
        navigate(pathsRoutes[index + jump])
    }

    const handleNagivationNext = () => {
        if(isNextSection) {
            handleNavigateSection(+1)    
        }else {
            setIsNext(value => value === "Pending" ? "Pending..." : "Pending")
        }
    }

    return (
        <div className="base:w-full base:h-screen base:flex base:items-center base:justify-between base:bg-magnolia">
            <main className="w-full min-h-screen flex flex-col base:w-11/12 base:max-h-fit base:max-w-5xl base:min-h-min base:mx-auto base:p-5 base:grid base:grid-cols-[0.5fr_1fr] base:gap-x-10 base:gap-y-5 base:rounded-xl base:bg-white">
                <picture className="max-h-52 base:h-full base:max-h-none base:row-span-2">
                    <source media="(min-width: 900px)" srcSet={bgDesktop} />
                    <img className="w-full base:h-full" src={bgMobile} alt="background pattern" />
                </picture>
                <div className="w-full flex-1 relative bg-magnolia base:bg-transparent">          
                    <section className="w-11/12 mx-auto py-8 px-5 -translate-y-20 rounded-lg bg-white sm:py-10 sm:px-7 base:p-0 base:pt-10 base:translate-y-0">
                        <Outlet/>                    
                    </section>          
                </div>
                <section className="py-5 bg-alabaster base:bg-transparent base:p-0 base:self-end">
                    <div className="w-11/12 mx-auto flex items-center justify-between">
                        { pathname !== "/" && <Button className="hover:text-blue hover:font-medium" children="Go Back" color="gray-100" size="base" onClick={() => handleNavigateSection(-1)} />}
                        <Button className="ml-auto" children="Next Step" color="white-100" size="base" onClick={handleNagivationNext} />
                    </div>
                </section>
            </main>
        </div>
    )
}

export { Layout }
import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button"

const Error404 = () => {
    const navigate = useNavigate()

    const handleVolver = () => {
        navigate("/")
    }

    return (
        <main className="w-full h-screen flex items-center justify-center flex-col text-center bg-black">
            <h1 className="text-red text-3xl font-bold italic">Chispas....</h1>
            <p className="mt-2 mb-7 text-red text-base">La pagina que has ingresado no existe</p>
            <Button color="red-100" size="base" onClick={handleVolver}>
                Volver
            </Button>
        </main>
    )
}

export { Error404 } 
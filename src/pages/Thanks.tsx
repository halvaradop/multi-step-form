import thank from "../assets/thank-you.svg"

const Thanks = () => {
    return (
        <>
            <img className="mx-auto" src={thank} alt="icon check" />
            <h1 className="mt-6 mb-4 text-blue text-2xl font-bold text-center">Thank you!</h1>
            <p className="text-gray text-base text-center">
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.
            </p>
        </>
    )
}

export { Thanks }
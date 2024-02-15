import LandingMan from "../assets/LandingMan.svg"
import LandingCoins from "../assets/Landing-Coins.svg"
import { Button, Grid } from "@mantine/core"
import { Navbar } from "../utils/NavBar"

export const LandingPage = () => {
    return (
        <>
            <Navbar />
            <section className="h-screen w-full">
                <div className="image-area position-relative flex justify-between absolute top-none left-none w-full h-full items-end px-md">
                    <img src={LandingMan} alt="Working Man" />
                    <img src={LandingCoins} alt="Coins" />
                </div>
                <div className="text-area items-center h-screen w-full flex flex-col justify-center">
                    <div className="text-5xl font-bold">Discover your spending habits</div>
                    <div className="text-3xl font-bold text-orange-500">Try our expense tracker</div>
                    <div className="btn-area">
                        <Button variant="filled" color="orange">Try Now</Button>
                        <Button className="ml-xs" variant="outline" color="orange">Learn More</Button>
                    </div>
                </div>


            </section>
            <div className="bg-orange-500 text-white">
                <section className="w-full">
                    <div className="flex">
                    </div>
                </section>
            </div>
        </>
    )
}
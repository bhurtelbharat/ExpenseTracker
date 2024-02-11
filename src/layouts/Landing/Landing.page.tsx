import { LandingPage } from "../../pages/LandingPage"
import { Navbar } from "../../utils/NavBar"
import { Route, Routes } from 'react-router';

export const LandingLayout = () => {
    return (
        <>
            <Navbar />
            <section>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                </Routes>
            </section>
        </>
    )
}
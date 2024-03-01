import { LandingPage } from '../pages/landing/Landing.page'
import { NavBarLanding } from '../components/modules/landing/partials/NavBarLanding'
import { Route, Routes } from 'react-router'
import { FeaturesPage } from '../pages/landing/Features.page'
import { ContactPage } from '../pages/landing/Contact.page'
import { FooterLanding } from '../components/modules/landing/partials/Footer.landing'

export const LandingLayout = () => {
    return (
        <>
            <NavBarLanding />
            <section>
                <Routes>
                    <Route path="" element={<LandingPage />} />
                    <Route path="/features" element={<FeaturesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </section>
            <FooterLanding/>
        </>
    )
}
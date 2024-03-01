import { HeroHome } from '../../components/modules/landing/home/Hero.home'
import { AboutHome } from '../../components/modules/landing/home/About.home'
import { AppPreviewLanding } from '../../components/modules/landing/common/AppPreview.landing'
import { TestimonialHome } from '../../components/modules/landing/home/Testimonial.home'
import { PartnersLanding } from '../../components/modules/landing/common/Partners.landing'
import { GetStartedLanding } from '../../components/modules/landing/common/GetStarted.landing'

export const LandingPage = () => {
    return (
        <>
            <HeroHome/>
            <div className="bg-primary-700">
                <AboutHome/>
                <AppPreviewLanding/>
            </div>
            <TestimonialHome/>
            <PartnersLanding/>
            <GetStartedLanding/>
        </>
    )
}
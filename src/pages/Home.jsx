import { useState, useEffect } from "react"
import AdmissionPopup from "../components/AdmissionPopup"
import HeroSlider from "../components/HeroSlider"
import WhyChoose from "../components/WhyChoose"
import AboutFull from "../components/AboutFull"
import InclusiveSection from "../components/InclusiveSection"
import ServicesOverview from "../components/ServicesOverview"
import FranchiseFull from "../components/FranchiseFull"
import FinalCTA from "../components/FinalCTA"

export default function Home() {

  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AdmissionPopup
        open={showPopup}
        onClose={() => setShowPopup(false)}
      />

      <HeroSlider />
      <WhyChoose />
      <AboutFull />
      <InclusiveSection />
      <ServicesOverview />
      <FranchiseFull />
      <FinalCTA />
    </>
  )
}
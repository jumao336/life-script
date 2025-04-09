import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FormSection from '../components/FormSection'
import StarryBackground from '../components/StarryBackground'

export default function CreatePage() {
  return (
    <div className="relative min-h-screen">
      <StarryBackground />
      <div className="relative z-10">
        <Navbar />
        <FormSection />
        <Footer />
      </div>
    </div>
  )
} 
import Hero from '@/components/Hero'
import PopularDesigns from '@/components/PopularDesigns'
import PricingTable from '@/components/PricingTable'
import Features from '@/components/Features'
import WhyChooseUs from '@/components/WhyChooseUs'
import ProcessSteps from '@/components/ProcessSteps'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-gray-50">
      <Hero />
      <PopularDesigns />
      <PricingTable />
      <Contact
        phone="0896868145"
        displayPhone="089 6868 145"
        name="Hỷ Thư"
        qr="/zalo.png"
      />
      <ProcessSteps />
      <Features />
      <WhyChooseUs />
      <FAQ />
      <Footer />
    </main>
  )
}


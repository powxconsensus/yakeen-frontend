import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroSection from '../components/HeroSection'
import CtaSection from '../components/CtaSection'
import Navbar from '../components/Navbar'
import Feature from '../components/Feature'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import crypto from "crypto";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <Feature/>
      <Gallery/>
      <CtaSection />
      <Footer/>
    </>
  )
}

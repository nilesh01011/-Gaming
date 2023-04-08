import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Banner from '@/components/Banner'
import GameCategorySection from '@/components/GameCategorySection'
import Section from '@/components/Section'
import Slider from '@/components/Slider'
import SliderOne from '@/components/SliderOne'
import SectionTwo from '@/components/SectionTwo'
import FooterSection from '@/components/FooterSection'
import { useEffect, useState } from 'react'
import Loading from '@/components/Loading'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [pageActive, setPageActive] = useState(true);

  useEffect(() => {
    setInterval(function () {
      setPageActive(false);
    }, 2000);
  }, [])

  return (
    <>
      <Head>
        <title>&Games</title>
        <meta name="description" content="Product List" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/GamesLogo-2.png" />
      </Head>
      {/* navbar tabs */}

      {
        pageActive === true ? (
          <Loading />
        ) : (
          <>
            <Header />

            <main className="w-full h-full">
              <Banner />
              <GameCategorySection />
              <Section />
              {/* slider */}
              <Slider />
              <SliderOne />
              <SectionTwo />
              <FooterSection />
            </main>

            <Footer />
          </>
        )
      }

    </>
  )
}

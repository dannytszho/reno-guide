import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Nevada from '../public/Nevada.png'
import { LongButton } from 'ui/Button'
import { SquareButton } from 'ui/Button'
import { CollapseButton } from 'ui/Button'
import BeerIcon from '../public/svg/BeerIcon'
import DiningIcon from '../public/svg/DiningIcon'
//import PoolBallIcon from '../public/svg/PoolBallIcon'
import type { NextPage } from 'next'
import UploadIcon from '../public/svg/UploadIcon'
import KayakIcon from '../public/svg/KayakIcon'
import CoffeeIcon from '../public/svg/CoffeeIcon'
import DowntownIcon from '../public/svg/DowntownIcon'
import Details from 'ui/Details'
import Depot from '../public/TheDepot.png'
import Louis from '../public/Louis.png'
import Genoa from '../public/Genoa.png'
import HikerIcon from '../public/svg/HikerIcon'
import Footer from 'ui/Footer'

const detailsMap = [
  {
    name: 'The Depot',
    icon: <BeerIcon />,
    pic: Depot,
    address: '325 E. 4TH STREET, RENO, NV 89512',
    addressUrl:
      'https://www.google.com/maps/place/The+Depot+Craft+Brewery+%26+Distillery/@39.531084,-119.811749,17z/data=!3m1!4b1!4m5!3m4!1s0x8099474a497e4dd5:0x47738ce5eaae0fda!8m2!3d39.531084!4d-119.809555',
    phone: '+17757374330',
    phoneDisplay: '775-737-4330',
    hypeLink: 'https://www.thedepotreno.com/',
    hypeLinkDisplay: 'thedepotreno.com',
  },
  {
    name: 'Louis Basque Corner',
    icon: <DiningIcon />,
    pic: Louis,
    address: '301 E. 4TH STREET, RENO, NV 89512',
    addressUrl:
      "https://www.google.com/maps/place/Louis'+Basque+Corner/@39.5308943,-119.812329,17z/data=!3m1!4b1!4m5!3m4!1s0x8099474a46878899:0xd4aecd4254f77c92!8m2!3d39.5308943!4d-119.810135",
    phone: '+17753237203',
    phoneDisplay: '775-323-7203',
    hypeLink: 'https://louisbasquecorner.com/',
    hypeLinkDisplay: 'louisbasquecorner.com',
  },
  {
    name: 'Genoa Bar and Saloon',
    icon: <DiningIcon />,
    pic: Genoa,
    address: '2282 MAIN ST, GENOA, NV 89411',
    addressUrl:
      'https://www.google.com/maps/place/Genoa+Bar+and+Saloon/@39.5749058,-120.5016792,8.83z/data=!4m5!3m4!1s0x809999c879f14717:0x47e89ae29591f818!8m2!3d39.0032181!4d-119.8464727?hl=en',
    phone: '+17757823870',
    phoneDisplay: '775-782-3870',
    hypeLink: 'https://www.yelp.com/biz/genoa-bar-genoa',
    hypeLinkDisplay: 'genobar.com',
  },
]

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>🌎 Reno & Lake Tahoe </title>
        <meta name="description" content="Meta description for the Home page" />
      </Head>

      {/* Hero section */}
      <div className="flex flex-col">
        {/* Upload button */}
        {/* <div className="flex m-5 justify-end">
          <SquareButton>
            <UploadIcon />
          </SquareButton>
        </div> */}
        <div className="flex justify-center mt-20">
          <Image src={Nevada} alt="main" />
        </div>
        <h2 className="flex justify-center font-iceland text-2xl m-2">
          · Reno · Lake Tahoe ·
        </h2>
      </div>

      {/* Food and Drinks section */}
      <section className="grid gap-4 justify-center m-10 font-iceland">
        <p className="flex justify-center text-2xl m-2 whitespace-pre">
          ↓{'   '}Food & Drinks{'   '}↓
        </p>

        {detailsMap.map(place => (
          <CollapseButton
            key={place.name}
            details={
              <Details
                pic={place.pic}
                address={place.address}
                addressUrl={place.addressUrl}
                phone={place.phone}
                phoneDisplay={place.phoneDisplay}
                hypeLink={place.hypeLink}
                hypeLinkDisplay={place.hypeLinkDisplay}
              />
            }
          >
            <div className="flex">
              {place.icon}
              <h2 className="text-2xl mx-auto">{place.name}</h2>
            </div>
          </CollapseButton>
        ))}
      </section>

      {/* Activities section */}
      <section className="grid gap-4 justify-center m-10 font-iceland">
        <p className="flex justify-center text-2xl whitespace-pre">
          ↓{'   '}Activities{'   '}↓
        </p>
        <LongButton>
          <a
            href="http://www.raftingreno.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex">
              <div className="pl-4">
                <KayakIcon />
              </div>
              <h2 className="text-2xl mx-auto">Whitewater Rafting</h2>
            </div>
          </a>
        </LongButton>
        <LongButton>
          <a href="https://downtownreno.org/" target="_blank" rel="noreferrer">
            <div className="flex">
              <div className="pl-4">
                <DowntownIcon />
              </div>
              <h2 className="text-2xl mx-auto">Reno Downtown</h2>
            </div>
          </a>
        </LongButton>
        <LongButton>
          <Link href="/hikingtrails">
            <div className="flex">
              <div className="pl-4">
                <HikerIcon />
              </div>
              <a className="text-2xl mx-auto">Hiking</a>
            </div>
          </Link>
        </LongButton>
      </section>

      {/* Tip section */}
      <section className="grid gap-4 justify-center m-10 font-iceland">
        <p className="flex justify-center text-2xl whitespace-pre">
          ↓{'   '}Tip Jar{'   '}↓
        </p>
        <LongButton>
          <a
            href="https://www.buymeacoffee.com/dannytszho"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex">
              <div className="pl-4">
                <CoffeeIcon />
              </div>
              <h2 className="text-2xl mx-auto">Buy me a Coffee</h2>
            </div>
          </a>
        </LongButton>
      </section>
      {/* Footer section */}
      <Footer />
    </>
  )
}

export default Home

import Image from 'next/image'
import Nevada from '../public/Nevada.png'
import { LongButton } from 'ui/Button'
import { SquareButton } from 'ui/Button'
import { CollapseButton } from 'ui/Button'
import BeerIcon from '../public/svg/BeerIcon'
import DiningIcon from '../public/svg/DiningIcon'
import PoolBallIcon from '../public/svg/PoolBallIcon'
import type { NextPage } from 'next'
import UploadIcon from '../public/svg/UploadIcon'
import Details from 'ui/Details'
import Depot from '../public/TheDepot.png'

const detailsMap = [
  {
    name: 'The Depot',
    icon: <BeerIcon />,
    pic: Depot,
    address: '325 E. 4TH STREET RENO, NV 89512',
    addressUrl:
      'https://www.google.com/maps/place/The+Depot+Craft+Brewery+%26+Distillery/@39.531084,-119.811749,17z/data=!3m1!4b1!4m5!3m4!1s0x8099474a497e4dd5:0x47738ce5eaae0fda!8m2!3d39.531084!4d-119.809555',
    phone: '+17757374330',
    phoneDisplay: '775-737-4330',
    hypeLink: 'https://www.thedepotreno.com/',
    hypeLinkDisplay: 'thedepotreno.com',
  },
  {
    name: 'Louis Basque corner',
    icon: <DiningIcon />,
    pic: Depot,
    address: '325 E. 4TH STREET RENO, NV 89512',
    addressUrl:
      'https://www.google.com/maps/place/The+Depot+Craft+Brewery+%26+Distillery/@39.531084,-119.811749,17z/data=!3m1!4b1!4m5!3m4!1s0x8099474a497e4dd5:0x47738ce5eaae0fda!8m2!3d39.531084!4d-119.809555',
    phone: '+17757374330',
    phoneDisplay: '775-737-4330',
    hypeLink: 'https://www.thedepotreno.com/',
    hypeLinkDisplay: 'thedepotreno.com',
  },
]

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex m-5 justify-end">
          <SquareButton>
            <UploadIcon />
          </SquareButton>
        </div>
        <div className="flex justify-center mt-20">
          <Image src={Nevada} alt="main" />
        </div>
        <h2 className="flex justify-center font-iceland text-2xl m-2">
          · Reno · Lake Tahoe ·
        </h2>
      </div>
      <section className="grid gap-4 justify-center m-10 font-iceland">
        <p className="flex justify-center text-2xl m-2 whitespace-pre">
          ↓{'  '}Food & Drinks{'  '}↓
        </p>

        {detailsMap.map(place => (
          <CollapseButton
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

        <LongButton>
          <div className="p-3">
            <DiningIcon />
          </div>
        </LongButton>
        <LongButton>
          <div className="p-3">
            <PoolBallIcon />
          </div>
        </LongButton>
      </section>
    </>
  )
}

export default Home

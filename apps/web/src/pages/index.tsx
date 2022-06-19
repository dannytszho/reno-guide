import { Buttonbb } from 'ui'
import Image from 'next/image'
import Nevada from '../public/Nevada.png'
import LongButton from 'ui/LongButton'
import BeerIcon from '../public/svg/BeerIcon'
import PoolBallIcon from '../public/svg/PoolBallIcon'
import DiningIcon from '../public/svg/DiningIcon'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="mt-40 m-12">
          <Image src={Nevada} alt="main" />
        </div>
        <div className="flex flex-col gap-4 mt-20 m-5">
          <LongButton>
            <BeerIcon />
            <h1></h1>
          </LongButton>
          <LongButton>
            <DiningIcon />
          </LongButton>
          <LongButton>
            <PoolBallIcon />
          </LongButton>
        </div>
      </div>
    </>
  )
}

export default Home

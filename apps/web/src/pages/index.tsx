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

        <CollapseButton details={<Details />}>
          <div className="flex">
            <BeerIcon />
            <h2 className="text-2xl mx-auto">The Depot</h2>
          </div>
        </CollapseButton>

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

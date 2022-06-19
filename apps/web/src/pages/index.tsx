import Image from 'next/image'
import Nevada from '../public/Nevada.png'
import { LongButton } from 'ui/Button'
import { SquareButton } from 'ui/Button'
import BeerIcon from '../public/svg/BeerIcon'
import DiningIcon from '../public/svg/DiningIcon'
import PoolBallIcon from '../public/svg/PoolBallIcon'
import type { NextPage } from 'next'
import UploadIcon from '../public/svg/UploadIcon'

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex m-5 justify-end">
          <SquareButton>
            <UploadIcon />
          </SquareButton>
        </div>
        <div className="mt-36 m-12">
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

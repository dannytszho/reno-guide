import Link from 'next/link'
import Head from 'next/head'
import { SquareButton } from 'ui'
import LeftArrowIcon from '../public/svg/LeftArrowIcon'

const hikingtrails = () => {
  return (
    <>
      <Head>
        <title>🗻 Trails - Reno & Lake Tahoe</title>
        <meta name="description" content="Meta description for the Home page" />
      </Head>
      <div className="flex flex-col">
        <div className="flex m-5 justify-start">
          <SquareButton>
            <Link href="/">
              <div className="p-2.5">
                <LeftArrowIcon />
              </div>
            </Link>
          </SquareButton>
        </div>
        <h2>hiking trails</h2>
        <footer className="text-center text-xs">
          <h3>&copy; 2022 Danny Tsui. All rights reserved.</h3>
        </footer>
      </div>
    </>
  )
}
export default hikingtrails

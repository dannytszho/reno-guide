import Link from 'next/link'
import Head from 'next/head'
import type { GetServerSideProps } from 'next'
import { gql } from '@apollo/client'
import { apolloClient } from '../../lib/apolloClient'
import ErrorPage from 'next/error'
import { SquareButton } from 'ui'
import LeftArrowIcon from '../public/svg/LeftArrowIcon'

export interface TrailsType {
  __typename: String
  id: String
  name: String
  length: String
  elevation: String
  duration: String
  difficulty: String
  rating: String
  url: String
}

interface Props {
  allTrails: TrailsType[]
}

const GET_ALL_TRAILS = gql`
  query {
    trails {
      id
      name
      length
      elevation
      duration
      difficulty
      rating
      url
    }
  }
`

const Hikingtrails = ({ allTrails }: Props) => {
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
        {allTrails.map(trail => (
          <>
            <h2 className="text-black">{trail.id}</h2>
            <h2>{trail.name}</h2>
          </>
        ))}
        <footer className="text-center text-xs">
          <h3>&copy; 2022 Danny Tsui. All rights reserved.</h3>
        </footer>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await apolloClient.query({
    query: GET_ALL_TRAILS,
  })

  return {
    props: { allTrails: data.trails },
  }
}

export default Hikingtrails

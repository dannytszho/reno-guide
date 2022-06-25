import Link from 'next/link'
import Head from 'next/head'
import type { GetServerSideProps } from 'next'
import { gql } from '@apollo/client'
import { apolloClient } from '../../lib/apolloClient'
import { SquareButton } from 'ui'
import LeftArrowIcon from '../public/svg/LeftArrowIcon'
import TrailsCard from 'ui/TrailsCard'
import Image from 'next/image'

export interface TrailsType {
  __typename: string
  id: string
  name: string
  length: string
  elevation: string
  duration: string
  difficulty: string
  rating: string
  imageUrl: string
  url: string
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
      imageUrl
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

        <div className="grid justify-center">
          {allTrails.map(trail => (
            <TrailsCard
              name={trail.name}
              length={trail.length}
              elevation={trail.elevation}
              image={trail.imageUrl}
              difficulty={trail.difficulty}
              rating={trail.rating}
              duration={trail.duration}
              urL={trail.url}
            />
          ))}
        </div>

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

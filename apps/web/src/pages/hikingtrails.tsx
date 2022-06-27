import Link from 'next/link'
import Head from 'next/head'
import { useState } from 'react'
import type { GetServerSideProps } from 'next'
import { gql } from '@apollo/client'
import { apolloClient } from '../../lib/apolloClient'
import { SquareButton } from 'ui'
import LeftArrowIcon from '../public/svg/LeftArrowIcon'
import TrailsCard from 'ui/TrailsCard'
import Rating from 'ui/Rating'
import Footer from 'ui/Footer'

export interface TrailsType {
  __typename: string
  id: string
  name: string
  length: string
  elevation: string
  duration: string
  difficulty: 'Easy' | 'Moderate' | 'Hard'
  rating: string
  imageUrl: string
  url: string
}

interface Props {
  allTrails: TrailsType[]
  displayedTrails: TrailsType[]
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
  const [showList, setShowList] = useState<TrailsType[] | undefined>(allTrails)

  const filterTrails = (level: any) => {
    const trail = allTrails.filter(cur => {
      return cur.difficulty === level
    })
    setShowList(trail)
  }

  return (
    <>
      <Head>
        <title>🗻 Trails - Reno & Lake Tahoe</title>
        <meta name="description" content="Meta description for the Home page" />
      </Head>
      <div className="flex flex-col font-iceland">
        <div className="flex m-5 justify-start">
          <SquareButton>
            <Link href="/">
              <div className="p-2.5">
                <LeftArrowIcon />
              </div>
            </Link>
          </SquareButton>
        </div>

        {/* Filter section */}

        <div className="mt-10 flex justify-center text-black space-x-4">
          <button
            onClick={() => filterTrails('Easy')}
            className="rounded-lg px-3 py-2 bg-yellow-300"
          >
            Easy
          </button>
          <button
            onClick={() => filterTrails('Moderate')}
            className="rounded-lg px-3 py-2 bg-green-400"
          >
            Moderate
          </button>
          <button
            onClick={() => filterTrails('Hard')}
            className="rounded-lg px-4 py-2 bg-red-400"
          >
            Hard
          </button>
          <button
            onClick={() => setShowList(allTrails)}
            className="rounded-lg px-4 py-2 bg-gray-200"
          >
            All
          </button>
        </div>

        <div className="grid justify-center">
          {showList?.map(trail => (
            <>
              <TrailsCard
                name={trail.name}
                length={trail.length}
                elevation={trail.elevation}
                image={trail.imageUrl}
                difficulty={trail.difficulty}
                rating={<Rating rating={parseFloat(trail.rating)} />}
                duration={trail.duration}
                urL={trail.url}
              />
            </>
          ))}
        </div>
      </div>
      <Footer />
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

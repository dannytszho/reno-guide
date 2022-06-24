import Link from 'next/link'
import Head from 'next/head'
import type { NextPage, GetStaticProps } from 'next'
import { gql, useQuery } from '@apollo/client'
import { apolloClient } from '../../lib/apolloClient'
import ErrorPage from 'next/error'
import { SquareButton } from 'ui'
import LeftArrowIcon from '../public/svg/LeftArrowIcon'

type Data = {
  id: String
  name: String
  difficulty: String
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

const Hikingtrails = () => {
  const { data, error, loading } = useQuery(GET_ALL_TRAILS)

  console.log(data)

  if (loading) return <p>Loading...</p>

  if (error) return <p>Something went wrong! {error.message} </p>

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
        {data.trails.map(trail => (
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

// export const getStaticProps: GetStaticProps = async () => {
//   const { data } = await apolloClient.query({
//     query: GET_ALL_TRAILS,
//   })

//   console.log(data)

//   return {
//     props: { data },
//   }
// }

export default Hikingtrails

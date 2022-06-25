import Image from 'next/image'

interface Props {
  name: string
  length: string
  elevation: string
  duration: string
  difficulty: string
  rating: string
  image: string
  urL: string
}

const TrailsCard = ({
  image,
  name,
  difficulty,
  length,
  elevation,
  duration,
  rating,
  urL,
}: Props) => {
  return (
    <div className='bg-gray-300 m-10 rounded overflow-hidden shadow-lg w-[150px] hover:scale-105 hover:tansition hover:duration-200"'>
      <a href={urL} target="_blank" rel="noreferrer">
        <Image src={image} alt="placeholder" width="150px" height="150px" />
        <div>{name}</div>
        <div>{difficulty}</div>
        <div>{length}</div>
        <div>{elevation}</div>
        <div>{rating}</div>
        <div>{duration}</div>
      </a>
    </div>
  )
}

export default TrailsCard

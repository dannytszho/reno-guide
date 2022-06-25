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
    <div className="bg-gray-300 font-iceland text-black m-10 rounded-xl overflow-hidden shadow-lg w-[300px] hover:scale-105 hover:tansition hover:duration-200">
      <a href={urL} target="_blank" rel="noreferrer">
        <Image src={image} alt="placeholder" width="300px" height="168px" />
        <div className="flex justify-between mx-3">
          <span className="rounded-lg px-2 bg-green-400">{difficulty}</span>
          <span>{length}</span>
        </div>
        <div className="font-bold text-2xl text-center">{name}</div>
        <div>Elevation: {elevation}</div>
        <div>{rating}</div>
        <div>{duration}</div>
      </a>
    </div>
  )
}

export default TrailsCard

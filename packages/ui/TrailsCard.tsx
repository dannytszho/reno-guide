import Image from 'next/image'
import { ReactElement } from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'

interface Props {
  name: string
  length: string
  elevation: string
  duration: string
  difficulty: 'easy' | 'moderate' | 'hard'
  rating: ReactElement
  image: string
  urL: string
}

const colorMap = {
  easy: 'bg-green-200',
  moderate: 'bg-green-500',
  hard: 'bg-red-400',
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
    <div className="bg-white font-iceland text-black m-10 rounded-xl overflow-hidden shadow-lg w-[300px] hover:scale-105 hover:tansition hover:duration-200">
      <a href={urL} target="_blank" rel="noreferrer">
        <Image src={image} alt="placeholder" width="300px" height="168px" />
        <div className="flex justify-between mx-3">
          <span
            className={['rounded-lg px-2', `${colorMap[difficulty]}`].join(' ')}
          >
            {difficulty}
          </span>
          <span>{length}</span>
        </div>
        <div className="font-bold text-2xl text-center">{name}</div>
        <div className="text-center whitespace-pre">
          Elevation:{'   '}
          {elevation}
        </div>
        <div className="flex justify-between mx-3">
          <span className="flex">
            <AiOutlineClockCircle size={15} className="mt-1 mr-1" />
            {duration}
          </span>
          <span>{rating}</span>
        </div>
      </a>
    </div>
  )
}

export default TrailsCard

import Image from 'next/image'

interface Props {
  image: string
  name: string
  difficuity: string
}

const TrailsCard = ({ image, name, difficuity }: Props) => {
  return (
    <div className='bg-gray-300 mt-10 rounded overflow-hidden shadow-lg w-[150px] hover:scale-105 hover:tansition hover:duration-200"'>
      <Image src={image} alt="placeholder" width="150px" height="150px" />
      <div>{name}</div>
      <div>{difficuity}</div>
    </div>
  )
}

export default TrailsCard

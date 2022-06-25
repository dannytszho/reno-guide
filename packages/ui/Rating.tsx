import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
const Rating = ({ rating }: { rating: number }) => {
  const totalRating = 5
  return (
    <div className="flex relative">
      {[...Array(totalRating)].map((star, i) => {
        return i < rating ? (
          <FaStar color={'#ffc107'} />
        ) : (
          <FaStar color={'#e4e5e9'} />
        )
      })}
    </div>
  )
}

export default Rating

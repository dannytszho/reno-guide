import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
// const Rating = ({ rating }: { rating: number }) => {
//   const totalRating = 5

//   return (
//     <div className="flex relative">
//       {[...Array(totalRating)].map((star, i) => {
//         return (
//           <>
//             <div className="relative inline-flex">
//               <div className="w-[100%] i overflow-hidden absolute">
//                 <FaStar color={'#ffc107'} />
//               </div>
//               <div>
//                 <FaStar color={'#e4e5e9'} />
//               </div>
//             </div>
//           </>
//         )
//       })}
//     </div>
//   )
// }

const Rating = ({ rating }: { rating: number }) => {
  return (
    <div>
      <span className="flex">
        {[...Array(Math.floor(rating))].map(key => (
          <div key={key}>
            <FaStar color={'#ffc107'} />
          </div>
        ))}
        {rating - Math.floor(rating) && (
          <div>
            <FaStarHalfAlt color={'#ffc107'} />
          </div>
        )}
        {[...Array(5 - Math.ceil(rating))].map(key => (
          <div key={key}>
            <FaStar color={'#e4e5e9'} />
          </div>
        ))}
      </span>
    </div>
  )
}

export default Rating

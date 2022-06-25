const Ratings = ({ value }: { value: number }) => {
  return (
    <div>
      {[...Array(5)].map(ind => {
        // you just use indice here
        return (
          <span key={ind}>
            <i
              className={
                value >= ind + 1
                  ? 'fas fa-star'
                  : value >= ind + 0.5
                  ? 'fas fa-star-half-alt'
                  : 'far fa-star'
              }
            ></i>
          </span>
        )
      })}
    </div>
  )
}
export default Ratings

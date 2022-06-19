import BeerIcon from '../../apps/web/src/public/svg/BeerIcon'
import PoolBallIcon from '../../apps/web/src/public/svg/PoolBallIcon'
import DiningIcon from '../../apps/web/src/public/svg/DiningIcon'

const LongButton = () => {
  return (
    <div className="w-[355px] h-[60px] border rounded-lg bg-gray-200">
      <h2>
        <BeerIcon />
        <DiningIcon />
        <PoolBallIcon />
      </h2>
    </div>
  )
}

export default LongButton

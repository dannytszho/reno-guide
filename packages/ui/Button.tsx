import BeerIcon from '../../apps/web/src/public/svg/BeerIcon'
import PoolBallIcon from '../../apps/web/src/public/svg/PoolBallIcon'
import DiningIcon from '../../apps/web/src/public/svg/DiningIcon'
import React from 'react'

export const LongButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[355px] h-[60px] border rounded-lg bg-zinc-200">
      <h2>{children}</h2>
    </div>
  )
}

export const SquareButton = () => {
  return <div className="w-[50px] h-[50px] border rounded-lg bg-zinc-200"></div>
}

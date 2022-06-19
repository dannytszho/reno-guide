import React from 'react'

export const LongButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[355px] h-[60px] border rounded-lg bg-zinc-200">
      <h2>{children}</h2>
    </div>
  )
}

export const SquareButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[50px] h-[50px] border rounded-lg bg-zinc-200">
      <h2>{children}</h2>
    </div>
  )
}

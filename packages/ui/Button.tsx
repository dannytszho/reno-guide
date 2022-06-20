import React from 'react'

export const LongButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="w-[355px] md:w-[650px] h-[60px] border rounded-lg bg-zinc-200 hover:cursor-pointer">
      <h2>{children}</h2>
    </button>
  )
}

export const SquareButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="w-[45px] h-[45px] border rounded-lg bg-zinc-200 hover:cursor-pointer">
      <h2>{children}</h2>
    </button>
  )
}

export const CollapseButton = ({
  children,
  details,
}: {
  children: React.ReactNode
  details: React.ReactNode
}) => {
  return (
    <div className="collapse collapse-arrow w-[355px] md:w-[650px] border bg-zinc-200 rounded-lg hover:">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">
        <h2>{children}</h2>
      </div>
      <div className="collapse-content">
        <p>{details}</p>
      </div>
    </div>
  )
}

import React from 'react'

export const LongButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[355px] md:w-[650px] h-[60px] border rounded-lg bg-zinc-200">
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

export const CollapseButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="collapse collapse-arrow w-[355px] md:w-[650px] border bg-zinc-200 rounded-lg">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">
        <h2>{children}</h2>
      </div>
      <div className="collapse-content">
        <p>
          tabindex="0" attribute is necessary to make the div focusable
          tabindex="0" attribute is necessary to make the div
          focusabletabindex="0" attribute is necessary to make the div
          focusabletabindex="0" attribute is necessary to make the div
          focusabletabindex="0" attribute is necessary to make the div
          focusabletabindex="0" attribute is necessary to make the div focusable
        </p>
      </div>
    </div>
  )
}

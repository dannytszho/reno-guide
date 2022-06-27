import { useEffect } from 'react'
import { useState } from 'react'

const filterOptions = ({ onClick }: { onClick: () => void }) => {
  return (
    <>
      <div className="mt-10 flex justify-center text-black space-x-4">
        <button
          onClick={onClick}
          className="rounded-lg px-3 py-2 bg-yellow-300"
        >
          Easy
        </button>
        <button className="rounded-lg px-3 py-2 bg-green-400">Moderate</button>
        <button className="rounded-lg px-4 py-2 bg-red-400">Hard</button>
        <button className="rounded-lg px-4 py-2 bg-gray-200">All</button>
      </div>
    </>
  )
}
export default filterOptions

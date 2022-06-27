const filterOptions = () => {
  return (
    <>
      <div className="mt-10 flex justify-center text-black space-x-4">
        <h2 className="rounded-lg px-3 py-2 bg-yellow-300">Easy</h2>
        <h2 className="rounded-lg px-3 py-2 bg-green-400">Moderate</h2>
        <h2 className="rounded-lg px-4 py-2 bg-red-400">Hard</h2>
        <h2 className="rounded-lg px-4 py-2 bg-gray-200">All</h2>
      </div>
    </>
  )
}
export default filterOptions

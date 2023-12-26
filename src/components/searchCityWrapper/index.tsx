

function SearchCityWrapper({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <div className='flex border border-gray-400 h-fit py-1 rounded-lg'>
        {children}
    </div>
  )
}

export default SearchCityWrapper
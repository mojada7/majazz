import React from 'react'

function CityShowerIcon({city} : {city : string}) {
  return (
    <div className="h-fit px-4 py-2 border border-fuchsia-500 rounded-xl">
        {city}
    </div>
  )
}

export default CityShowerIcon
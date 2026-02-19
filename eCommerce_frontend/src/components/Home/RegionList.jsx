import React from 'react'
import regionData from '../../data/regionData'
import Regions from './Regions.jsx'
function RegionList() {
  return (
    <div className="d-flex flex-wrap gap-4">
{regionData.map((region,index)=>(
  <Regions 
  key={index}
  img={region.img}
  name={region.name}
  address={region.address}
  />
))}

    </div>
    
  )
}

export default RegionList
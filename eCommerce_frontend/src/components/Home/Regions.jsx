import React from 'react'

function Regions({img,name,address}) {
  return (
    <div className="d-flex align-items-center gap-2" style={{minWidth:'150px'}}>
<img src={img} alt="" />
<div className="content">
  <p  className='m-0'>{name}</p>
  <p  className='text-muted small m-0 p-0'>{address}</p>
</div>
    </div>
    
  )
}

export default Regions
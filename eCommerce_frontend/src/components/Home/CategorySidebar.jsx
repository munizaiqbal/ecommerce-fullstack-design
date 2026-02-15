import React from 'react'
import './CategorySidebar.css';

function CategorySidebar() {
  return (
<div className="bg-white sidebar h-100 " style={{minWidth:'150px'}}>
  <ul className="list-unstyled m-0 text-center  ">
    <li><a className="text-decoration-none d-block  py-2 text-secondary" href="#">Automobiles</a></li>
    <li><a className="text-decoration-none d-block py-2 text-secondary" href="#">Clothes and wear</a></li>
    <li><a className="text-decoration-none d-block py-2 text-secondary" href="#">Home interiors</a></li>
    <li><a className="text-decoration-none d-block py-2 text-secondary" href="#">Computer and tech</a></li>
    <li><a className="text-decoration-none d-block py-2 text-secondary" href="#">Tools, equipments</a></li>
    <li><a className="text-decoration-none d-block py-2 text-secondary" href="#">Sports and outdoor</a></li>
    <li><a className="text-decoration-none d-block py-2 text-secondary" href="#">Animal and pets</a></li>
    <li><a className="text-decoration-none d-block py-2 text-secondary" href="#">Machinery tools</a></li>
  </ul>
</div>



  )
}

export default CategorySidebar
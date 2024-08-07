import React from 'react'
import './Navbar.css'
import { TbBrandWebflow } from "react-icons/tb";
import {menu} from '../../data'
import {Link,animateScroll as scroll } from 'react-scroll';
import {FaArrowUpRightFromSquare,FaBarsStaggered} from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className ='navbar_container'>
      <div className="log_container">
        <TbBrandWebflow />
      </div>
      <div className="tab_group">
        {menu.map((list,index)=>(
          <Link
          activeClass="active"
          className='tab_item name'
          to={list.name.toLowerCase()}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          key={index}
          >
            {list.name}
          </Link>
        ))}

      </div>
      <div className="nav_buttons_group">
        <button className="btn btn_primary">Resume<FaArrowUpRightFromSquare/></button>
        <FaBarsStaggered className="menu"/>
      </div>
    </nav>
  )
}

export default Navbar
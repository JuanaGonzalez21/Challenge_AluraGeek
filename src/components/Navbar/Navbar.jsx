import React from 'react'
import '../../assets/styles/Navbar.css'
import logoZonaGeek from '../../assets/img/logo.png'


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid flex-nowrap justify-content-around pb-2">
          <a className="navbar-brand"><img src={logoZonaGeek} alt="" /></a>
          <form className="d-flex " >
            <div className='formSearchNavbar d-flex align-items-center'>
              <input className="inputSearchNavbar" type="search" placeholder="Search" aria-label="Search"></input>
              <button className=" btnFormNavbar" type="submit"><ion-icon name="search-circle-outline"></ion-icon></button>
            </div>
          </form>
          <button type="button" className="btn btn-outline-info">Login</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

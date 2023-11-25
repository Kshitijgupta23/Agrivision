import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import NavCSS from './Navbar.module.css';
import leaf from './leaf.png';
import { UserContext } from '../../App';

const Navbar = () => {
  const {state, dispatch} = useContext(UserContext);

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li className={NavCSS.nav_items}>
            <Link to="/Dashboard" className={NavCSS.nav_links}>
              Dashboard
            </Link>
          </li>
          <li className={NavCSS.nav_items}>
            <Link to="/logout" className={NavCSS.nav_links}>
              <button className={NavCSS.btn}>Logout</button>
            </Link>
          </li>
        </>
      )
    } else {
      return (
        <>
          <li className={NavCSS.nav_items}>
            <Link to="/" className={NavCSS.nav_links}>
              Login
            </Link>
          </li>
          <li className={NavCSS.nav_items}>
            <Link to="/register" className={NavCSS.nav_links}>
              Register
            </Link>
          </li>
          <li className={NavCSS.nav_items}>
            <Link to="/Dashboard" className={NavCSS.nav_links}>
              Dashboard
            </Link>
          </li>
        </>
      )
    }
  };

  return (
    <div>
      <nav className={NavCSS.navbar}>
        <div className={NavCSS.left}>
          <img className={NavCSS.leaf} src={leaf} alt="Img not available" />
          <Link to="/" className={NavCSS.brand_logo}>
            AgriVision
          </Link>
        </div>
        <ul className={NavCSS.nav_list}>
          <RenderMenu />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

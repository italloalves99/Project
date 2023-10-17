import React from 'react';
import {Link} from 'react-router-dom';
import Container from './Container';
import styles from './Navbar.module.css';
import logo from '../../img/costs_logo.png';
function Navbar() {
  return (
  <nav className={styles.navbar}>
    <Container>  
      <ul className={styles.list}>
        <Link to="/" className={styles.logo}><img src={logo} alt="Costs"></img></Link>
        <li className={styles.item}><Link to='/'>Home</Link></li>
        <li className={styles.item}><Link to='/projects'>Projects</Link></li>
        <li className={styles.item}><Link to='/contact'>Contato</Link></li>
        <li className={styles.item}><Link to='/company'>Empresa</Link></li>  
      </ul>  
    </Container>  
  </nav>
  )
}

export default Navbar;

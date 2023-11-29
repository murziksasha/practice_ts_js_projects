
import Logo from '../Logo/Logo';
import styles from './PageNav.module.scss';
import { NavLink } from 'react-router-dom'

export default function PageNav() {
  let activeClassName = "active";
  return (
    <nav className={styles.nav}>
      <Logo/>
      <ul>
        <li>
          <NavLink to='/' className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>Home</NavLink>
        </li>
        <li>
          <NavLink to='/product' className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>Product</NavLink>
        </li>
        <li>
          <NavLink to='/login' className={({ isActive }) => (isActive ? `${styles.ctaLink} ${activeClassName}` : `${styles.ctaLink}`)}>Login</NavLink>
        </li>
      </ul>
    </nav>
  )
}

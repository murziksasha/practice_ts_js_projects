
import styles from './PageNav.module.scss';
import { NavLink } from 'react-router-dom'

export default function PageNav() {
  let activeClassName = "active";
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to='/'             className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>Home</NavLink>
        </li>
        <li>
          <NavLink to='/product'  className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>Product</NavLink>
        </li>
        <li>
          <NavLink to='/pricing'             className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>Pricing</NavLink>
        </li>
      </ul>
    </nav>
  )
}


import styles from './PageNav.module.scss';
import { NavLink } from 'react-router-dom'

export default function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to='/' >Home</NavLink>
        </li>
        <li>
          <NavLink to='product'>Product</NavLink>
        </li>
        <li>
          <NavLink to='pricing'>Pricing</NavLink>
        </li>
      </ul>
    </nav>
  )
}

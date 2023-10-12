import { Link, NavLink } from 'react-router-dom';
import styles from './AppHeader.module.scss';

interface NavLinkProps {
    isActive: boolean;
  }

interface AppHeaderProps { }

export const AppHeader = ({ }: AppHeaderProps) => (
  <header className={styles.app__header}>
      <h1 className={styles.app__title}>
          <Link to="/">
              <span>Marvel</span> information portal
          </Link>
      </h1>
      <nav className={styles.app__menu}>
          <ul>
              <li><NavLink 
              end
              style={({isActive}: NavLinkProps) => ({color: isActive ? '#9f0013' : 'inherit'})}
              to="/">
                Characters</NavLink></li>
              /
              <li><NavLink 
              end 
              style={({isActive}: NavLinkProps) => ({color: isActive ? '#9f0013' : 'inherit'})}
              to="/comics">Comics</NavLink></li>
          </ul>
      </nav>
  </header>
)

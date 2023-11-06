import styles from './Logo.module.scss';

interface LogoProps { }

export const Logo = ({ }: LogoProps) => (
  <div className="logo">
  <span role="img">🍿</span>
  <h1>usePopcorn</h1>
</div>
);

import styles from './AppLayout.module.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Map from '../../components/Map/Map';

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar/>
      <Map/>
      
    </div>
  )
}

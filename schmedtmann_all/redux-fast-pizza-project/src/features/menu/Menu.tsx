import { useLoaderData } from 'react-router-dom';
import {IPizza, getMenu} from '../../services/apiRestaurant';
import MenuItem from './MenuItem';



function Menu() {

  const menu = useLoaderData() as IPizza[];

  return <ul>
    {menu.map(pizza => <MenuItem {...pizza} key={pizza.id}/>)}
  </ul>
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;

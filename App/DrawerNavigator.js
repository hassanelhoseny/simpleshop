
import { createDrawerNavigator } from 'react-navigation-drawer';
import OrderView from './Pages/shop/OrderView';


const DrawerNavigator = createDrawerNavigator({
    OrderView: OrderView
  });
  
  export default DrawerNavigator;
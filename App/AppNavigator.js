import React from 'react' ;
import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer , createSwitchNavigator} from 'react-navigation' ;
import ProductsView from './Pages/shop/ProductsView' ;
import ProductDetail from './Pages/shop/ProductDetail' ;
import UserProducts from './Pages/user/UserProducts';
import EditProduct from  './Pages/user/EditProduct';
import Cart from './Pages/shop/Cart' ;
import { createDrawerNavigator } from 'react-navigation-drawer';
import OrderView from './Pages/shop/OrderView';
import {Ionicons}  from '@expo/vector-icons';

const defaultNavOptions = {

    headerTintColor: '#000000'
  };
  const ProductsNavigator = createStackNavigator(
    {
      Products: ProductsView,
      ProductDetail: ProductDetail,
      Cart: Cart
    },
    {
      navigationOptions: {
        drawerIcon: drawerConfig => (
          <Ionicons
            name='md-cart'
            size={23}
            color='#000000'
          />
        )
      },
      defaultNavigationOptions: defaultNavOptions
    }
  );
  const OrdersNavigator = createStackNavigator(
    {
        Orders : OrderView,
    },
    {
      navigationOptions: {
        drawerIcon: drawerConfig => (
          <Ionicons
            name='md-list'
            size={23}
            color='#000000'
          />
        )
      },
      defaultNavigationOptions: defaultNavOptions
    }
  );
  //Admin navigation screen 
  const AdminNavigator = createStackNavigator(
    {
        YourProducts : UserProducts,
        EditProduct : EditProduct
    },
    {
      navigationOptions: {
        drawerIcon: drawerConfig => (
          <Ionicons
            name='md-create'
            size={23}
            color='#000000'
          />
        )
      },
      defaultNavigationOptions: defaultNavOptions
    }
  );
  const AppNavigator = createDrawerNavigator(
    {
      Products: ProductsNavigator,
      OrderView: OrdersNavigator , 
      Admin : AdminNavigator
    },
    {
      contentOptions: {
        activeTintColor: '#000000'
      }
    }
  );





export default createAppContainer (AppNavigator);


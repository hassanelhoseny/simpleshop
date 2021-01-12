
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStore ,  combineReducers} from 'redux' ;
import {Provider} from 'react-redux' ; 
import AppNavigator from './App/AppNavigator' ;
import cartReducer  from './App/Pages/store/reducers/Cart'
import productsReducers from './App/Pages/store/reducers/Products';
import ordersReducers from './App/Pages/store/reducers/Orders' ;
import Reactotron from './ReactotronConfig';

if(__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}


const rootReducers = combineReducers ({
  products: productsReducers ,
  cart : cartReducer,
  orders: ordersReducers
});

const store = createStore (rootReducers ,  Reactotron.createEnhancer() );

export default function App() {

  return (
    <Provider store = {store}> 

    <AppNavigator />

    </Provider>
    
  );
}

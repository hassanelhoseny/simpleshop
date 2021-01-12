import React from 'react' ;
import {FlatList , Text} from 'react-native' ;
import {useSelector} from 'react-redux' ;
import {HeaderButtons , Item} from 'react-navigation-header-buttons' ;
import HeaderButton from '../../component/UI/HeaderButton'; 
import OrderItem from '../../component/shop/OrderItem' ;

const OrderView = props =>{ 

    const orders =useSelector(state => state.orders.orders) ;  

    return (
        <FlatList  data = {orders} 
         keyExtractor = {item => item.id} 
         renderItem = {itemData => <OrderItem 
            amount = {itemData.item.totalAmount}
             date= {itemData.item.readableDate}
             items = {itemData.item.items}
             />}
         />
    )

}

OrderView.navigationOptions = props =>{
    

    return {
        headerLeft:() => <HeaderButtons   HeaderButtonComponent = {HeaderButton} >
    
        <Item title = 'menu' iconName = 'md-menu' onPress = {()=> {props.navigation.toggleDrawer();} } />
      </HeaderButtons> ,
      
    }
}

export default OrderView ;
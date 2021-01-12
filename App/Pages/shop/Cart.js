import React from 'react' ;
import {Button, Text , View , StyleSheet  , FlatList} from 'react-native' ;
import {useSelector , useDispatch}  from 'react-redux' ;
import CartItem from '../../component/shop/CartItem';
import * as cartActions from '../store/actions/Cart';
import * as ordersActions from '../store/actions/Orders' ;


const CartScreen = props =>{ 

    const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    const cartItems = useSelector(state => {
        const transformedCard = [] ;
        for (const key in state.cart.items){
            transformedCard.push({
                productId : key ,
                productTitle: state.cart.items[key].productTitle ,
                productPrice : state.cart.items[key].productPrice,
                quantity: state.cart.items[key].quantity,
                sum : state.cart.items[key].sum ,
            })
        } 
        return transformedCard ;
    });

    const dispatch = useDispatch() ;

    return (
        <View style = {styles.screen}> 
            <View style= {styles.summary}>
                <Text style = {styles.text}>
                    total: <Text style= {styles.amount}>${cartTotalAmount.toFixed(2)}</Text>
                </Text>
           
            <Button title = "order now" 
             disabled = {cartItems.length === 0}
             onPress = {()=> {
                 dispatch (ordersActions.addOrder(cartItems,cartTotalAmount))
             }}
             />
        </View>

        <FlatList data = {cartItems}  keyExtractor= {item => item.productId} 
         renderItem = {itemData => <CartItem quantity = {itemData.item.quantity} 
         title = {itemData.item.productTitle}
         amount = {itemData.item.sum}
         deletable
         onRemove = {()=> {
            dispatch(cartActions.removeFromCart(itemData.item.productId)) ;
         }}
         />}/>

        </View>
    );

};


const styles= StyleSheet.create({
    screen:{ 
        margin: 20

    } ,
    summary: {
        flexDirection: 'row' ,
        alignItems: 'center' ,
        justifyContent: 'space-between' ,
        marginBottom: 20 ,
        padding: 10 ,
        shadowColor: 'black',
        shadowOpacity: 0.2 ,
        shadowOffset: {width: 0 , height: 2} ,
        shadowRadius: 8 ,
        elevation: 5 ,
        borderRadius: 10 ,
        backgroundColor: '#FFFAFA' , 
        
    } ,
    text: {
        fontWeight: 'bold',
        fontSize: 18
    } ,
    amount:{

    }

}) ;


export default CartScreen ;

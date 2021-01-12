import React , {useState} from 'react' ;
import {View , StyleSheet , Text  ,Button } from 'react-native' ; 
import CartItem from './CartItem';

const OrderItem = props =>{ 

    const [showDetail , setShowDetail] = useState(false) ;

    return(
        <View style = {styles.orderitem}> 
            <View style = {styles.summary}>
                <Text style = {styles.amount}>$ {props.amount.toFixed(2)} </Text> 
                <Text style = {styles.date}>{props.date}</Text>
            </View> 
            <Button title = { showDetail ?"hide details" : "show details" }
            onPress = {()=> {
                setShowDetail(prevState => !prevState)
            }}
            /> 

            {showDetail &&
             <View style = {styles.details}> 
                {props.items.map(cartItem => <CartItem 
                    key= {cartItem.productId}
                    quantity= {cartItem.quantity}
                     amount = {cartItem.sum}
                     title = {cartItem.productTitle}
                     />)}
                </View>}

        </View>
    )

}

const styles = StyleSheet.create({
     orderitem:{
        shadowColor: 'black',
        shadowOpacity: 0.2 ,
        shadowOffset: {width: 0 , height: 2} ,
        shadowRadius: 8 ,
        elevation: 5 ,
        borderRadius: 10 ,
        backgroundColor: '#FFFAFA' ,
        margin : 20 ,
        padding: 10 ,
        alignItems: 'center'

     },
     summary:{
         flexDirection: 'row' ,
         justifyContent: 'space-between' ,
         alignItems: 'center',
         width: '100%',
         marginBottom: 15
     } ,
     amount:{
         fontWeight: 'bold' ,
         fontSize: 16 
     } ,

     date: {
         fontWeight: 'bold' ,
         fontSize: 16 ,
         color : '#888'
     } ,
     details:{
         width: '100%'
     }
});

export default OrderItem ;

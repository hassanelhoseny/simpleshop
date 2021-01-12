import React from 'react' ;
import {Text , View , StyleSheet , TouchableOpacity} from 'react-native' ;
import {Ionicons}  from '@expo/vector-icons';


const CartItem = props =>{ 
return(
   <View style= {styles.cartitem}>
       <View style = {styles.itemdata}>
           <Text style = {styles.quantity}>{props.quantity} </Text>  
            <Text style= {styles.title}>{props.title}</Text> 
            </View>

            <View style = {styles.itemdata}> 
            <Text style = {styles.amount}> $ {props.amount.toFixed(2)} </Text> 


           {props.deletable && <TouchableOpacity onPress = {props.onRemove} style = {styles.deleteB}> 

            <Ionicons  
               name = 'md-trash'
               color = "red" 
               size = {23}
            
            />

            </TouchableOpacity> }

            </View>
           
       

   </View>
);

};

const styles = StyleSheet.create({ 
    cartitem:{
        padding: 10 ,
        backgroundColor: 'white' ,
        flexDirection: 'row' ,
        justifyContent: 'space-between',
        marginHorizontal: 20 
    },
    itemdata:{
        flexDirection: 'row' ,
        alignItems: 'center'
    },
    quantity:{
        fontWeight: 'bold',
        fontSize: 16 ,
        color: '#888'
    },
    title : {
        fontWeight: 'bold' ,
        fontSize: 16 ,

    },
    amount: {
        fontWeight: 'bold',
        fontSize: 16
    },
    deleteB : {
        marginLeft: 20
    }



}) ; 


export default CartItem ;
import React from 'react' ;
import {Text , StyleSheet, View , Button, Image, ScrollView} from 'react-native' ;
import {useSelector  , useDispatch}  from 'react-redux' ; 

import * as cartActions from '../store/actions/Cart'

const ProductDetail = props =>{ 

    const productId = props.navigation.getParam('productId') ;
    const selectedProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === productId)) ; 

    const dispatch = useDispatch() ;

    return (
        <ScrollView> 
        <Image style= {styles.image} source = {{uri: selectedProduct.imageUrl}}   />

        <View style = {styles.actions}>

        <Button  title = 'Add +' onPress = {()=> {
               
               dispatch(cartActions.addToCart(selectedProduct));
        }} />
        </View>


        <Text style = {styles.price}> {selectedProduct.price} $</Text>
        <Text style = {styles.desc}>{selectedProduct.discription}</Text>


        </ScrollView>
    ) ;
}


const styles = StyleSheet.create({ 

    image:{ 

        width: '100%' ,
        height: 300

    } , 

    price:{ 

        fontSize: 20 ,
        textAlign: 'center' ,
        marginVertical: 20 ,
       fontWeight: 'bold'
        

    },

    actions:{ 
        marginVertical: 10 ,
        alignItems: 'center'

    },

    desc:{ 

        fontSize: 14 ,
        textAlign: 'center',
        marginHorizontal: 20

    }
  

});


export default ProductDetail ;
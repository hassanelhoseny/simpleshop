import React from 'react' ;

import {View , Text , Image , StyleSheet , Button , TouchableOpacity}  from 'react-native'; 


const ProductItem = props => { 

    return(

        <TouchableOpacity onPress = {props.onSelect}>
        
        <View style = {styles.product}> 

        <View style= {styles.imageContainer}>
            <Image style = {styles.image} source= {{uri : props.image}} />
            </View>

            <View style =  {styles.details}>
            <Text style = {styles.title}> {props.title}</Text>
            <Text style = {styles.price}>{props.price}$</Text>
            </View>

            <View style = {styles.actions}>
              {props.children}
            </View>
        </View>
        </TouchableOpacity>
    ) ;
    
}

const styles = StyleSheet.create ({ 
    product:{
        shadowColor: 'black',
        shadowOpacity: 0.2 ,
        shadowOffset: {width: 0 , height: 2} ,
        shadowRadius: 8 ,
        elevation: 5 ,
        borderRadius: 10 ,
        backgroundColor: '#FFFAFA' ,
        height: 300 , 
        margin: 20

    } ,
    imageContainer:{ 
        width: '100%' ,
        height: '60%',
        borderTopLeftRadius: 10 ,
        borderTopRightRadius: 10 ,
        overflow: 'hidden'

      
    },

    image:{
        width: '100%' ,
        height: '100%'
    } ,
    title:{ 
        fontSize: 18 ,
        marginVertical: 4 ,
    } ,
    price:{
        fontSize: 14 ,
        color: '#888',
        

    },
    details:{
        alignItems: 'center' ,
        height: '15%' ,
        padding: 10 
    },
    actions:{ 

        flexDirection: 'row' ,
        justifyContent: 'space-between',
        alignItems: 'center' ,
        height: '25%' ,
        paddingHorizontal: 25 ,
        paddingTop: 15


    }

});

export default ProductItem ;
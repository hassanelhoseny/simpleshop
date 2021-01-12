import React from 'react' ;
import {FlatList , Button} from 'react-native' ; 
import {useSelector , useDispatch} from 'react-redux' ;
import ProductItem from '../../component/shop/ProductItem' ;
import * as cartActions  from '../store/actions/Cart' ;
import {HeaderButtons , Item} from 'react-navigation-header-buttons' ;
import HeaderButton from '../../component/UI/HeaderButton';



const ProductsView = props =>{ 

    const products = useSelector (state => state.products.availableProducts ) ;

    const dispatch = useDispatch () ; 

    const selectItemHandler = (id , title)=>{ 
      props.navigation.navigate("ProductDetail" ,{
               productId: id , 
               productTitle: title
      }
               )
      

    }

    

    return (

     <FlatList 
      data = {products}
        keyExtractor= {item => item.id} 
        renderItem= {itemData => <ProductItem 
            image= {itemData.item.imageUrl}
             title = {itemData.item.title}
              price = {itemData.item.price} 
              onSelect= {()=> {selectItemHandler(itemData.item.id , itemData.item.title)}}
              > 
                <Button color = '#708090' title = "View Details"
                 onPress = {()=> {selectItemHandler(itemData.item.id , itemData.item.title)}} />
                <Button color = '#708090' title = {"to cart"}
                 onPress = {()=> {dispatch(cartActions.addToCart(itemData.item)) ;
                 }}  />
              
              </ProductItem> 
             } 
        
        />

    );

            }
ProductsView.navigationOptions= props =>{ 

  
  return{
    headerLeft:() => <HeaderButtons   HeaderButtonComponent = {HeaderButton} >
    
      <Item title = 'menu' iconName = 'md-menu' onPress = {()=> {props.navigation.toggleDrawer();} } />
    </HeaderButtons>
    ,


  headerRight: () => <HeaderButtons   HeaderButtonComponent = {HeaderButton} >
    
    <Item title = 'Cart' iconName = 'md-cart' onPress = {()=> {props.navigation.navigate("Cart")} } />
  </HeaderButtons>
    
    
  }

  }
  





export default ProductsView ;
import React from 'react' ;

import {FlatList , Button , Alert} from 'react-native' ;
import {useSelector , useDispatch}  from 'react-redux';
import ProductItem from '../../component/shop/ProductItem';
import * as productsActions from '../store/actions/Products';
import {HeaderButtons , Item} from 'react-navigation-header-buttons' ;
import HeaderButton from '../../component/UI/HeaderButton';


const UserProducts = props =>{
    const userProducts = useSelector(state => state.products.userProducts) ;
    const dispatch = useDispatch() ; 

    const editProduct = (id) =>{ 
        props.navigation.navigate("EditProduct" , {productId: id})

    }

    const Delete =(id) =>{
        Alert.alert('Are you sure !' ,'Do you really want to delete Item from shop ?'  , [
            {text: 'No' , style: 'default'} ,
            {text: 'Yes' , style: 'destructive' , onPress : ()=> {dispatch(productsActions.deleteProduct(id))}  }
        ]);
    
    };

    return (
        <FlatList 
         data = {userProducts} 
          keyExtractor = {item => item.id} 
          renderItem = {itemData =>(
             <ProductItem 
             image= {itemData.item.imageUrl}
             title={itemData.item.title} 
            price = {itemData.item.price}
            onSelect = {() => {editProduct(itemData.item.id)}} 
              > 
                <Button  title = "Edit"
                 onPress = {()=> {editProduct(itemData.item.id)}} />

                <Button  title = "Delete"
                 onPress = {Delete.bind(this , itemData.item.id)}
                     
                    
                  />

                  </ProductItem>
           ) }
          />
    );

};
UserProducts.navigationOptions= props =>{ 

    return{ 

        headerTitle: 'Editing Product' ,
        
      headerLeft:() => <HeaderButtons   HeaderButtonComponent = {HeaderButton} >
      
        <Item title = 'menu' iconName = 'md-menu' onPress = {()=> {props.navigation.toggleDrawer();} } />
      </HeaderButtons>
      ,


      headerRight: () => <HeaderButtons   HeaderButtonComponent = {HeaderButton} >
        
        <Item title = 'Add' iconName = 'md-create' onPress = {()=> {props.navigation.navigate("EditProduct")} } />
      </HeaderButtons>
      
      
      
    }
  
    }



export default UserProducts ;
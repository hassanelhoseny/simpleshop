import React from 'react' ;

import {HeaderButton} from 'react-navigation-header-buttons' ; 

import {Ionicons}  from '@expo/vector-icons' ; 


const CustomHeader = props =>{

    return  <HeaderButton  {...props} 
     IconComponent={Ionicons}
       iconSize = {23}
        color= '#000000' /> ; 
};



export default CustomHeader ;

export const DELETE_PRODUCT = 'DELETE_PRODUCT' ;
export const CREATE_PRODUCT =  'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT' ;


export const deleteProduct = productId =>{
    return {type: DELETE_PRODUCT , pid: productId}
}

export const createProduct = (title , discription ,imageUrl , price) =>{
    return{type: CREATE_PRODUCT , productData: {
        title , 
        discription ,
        imageUrl,
        price
    }}
}


export const updateProduct  = (id ,title , discription ,imageUrl) =>{
    return{type: UPDATE_PRODUCT ,
        pid: id ,
        productData: {
        title , 
        discription ,
        imageUrl
    }}
}

export var AddProductToCart = (products,NewProduct) => {
    var NewArray = [...products];
    var k = false;

    for (var i = 0; i < NewArray.length; i++) {        
        if(NewArray[i].Title === NewProduct.Title) {
            var obj = {...NewArray[i]}
            obj.Quantity++;
            NewArray[i] = obj;
            k=true
        }        
    }
    if(!k) NewArray.push(NewProduct);

    return ({
        type: "ADD_PRODUCT_TO_CART",
        payload: NewArray        
    });
}








// export var removeProductFromCart = (productId) => async (dispatch) => {
//     try {
//         dispatch({
//             type: REMOVE_PRODUCT_FROM_CART,
//             payload: {
//                 productId
//             }
//         })
//     } catch (error) {
//         console.log(error)
        
//     }
// }

// export var deleteProuctFromCart = (productId) => async (dispatch) => {
//     try {
//         dispatch({
//             type: DELETE_PRODUCT_FROM_CART,
//             payload: {
//                 productId
//             }
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }
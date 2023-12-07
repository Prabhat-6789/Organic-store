import { useParams } from 'react-router-dom';
import { useEffect,useContext, useState } from 'react';
import UserContext from '../../Context/userContext';
const OrderSummary = ({id}) => {
    //const { id } = useParams();
    const {items,setItems,cartItems,setCartItems} = useContext(UserContext);
    const [itemName,setItemName] = useState();
    const [itemPrice,setItemPrice] = useState();
    console.log("orderSummary");
    // let itemName;
    // let itemPrice;
    useEffect(()=>{
        //let temp = items.find(it => it.id === parseInt(id, 10));
        let removedItem = items.find(item => item.id === parseInt(id, 10));
        console.log("removedItem1: ",removedItem);
    // If the item is found, remove it from the array and update the count
    if (removedItem) {
        // Remove the item from the array
        console.log("removedItem2: ",removedItem);
        setItemName(removedItem.name);
        setItemPrice(removedItem.price);
        const newArray = items.filter(item => item !== removedItem);

        // Update the count by subtracting the quantity of the removed item
        setCartItems(cartItems-removedItem.quantity);
        setItems(newArray);
    }
    },[]);

    return ( 
        <div>
            {itemName && itemPrice ? 
                (
                    <div style={{textAlign:'center'}}>
                        <h2>Your order has been placed Successfully!</h2>
                        <h3>Item Name: {itemName}</h3>
                        <h3>Paid Price: $ {itemPrice.toFixed(2)}</h3>
                    </div>
                ) :
                <div></div>
            }
        </div>
     );
}
 
export default OrderSummary;
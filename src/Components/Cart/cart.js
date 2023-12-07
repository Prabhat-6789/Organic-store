// Navbar.js
import React from 'react';
import { useContext } from 'react';
import UserContext from '../../Context/userContext';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Cart = () => {
  //const { cart, getTotalPrice } = useCart;
  const {items,setItems,cartItems,setCartItems} = useContext(UserContext);
  var randomId;

  // function generateRandomId(length = 10) {
  //   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //   randomId = '';
  
  //   for (let i = 0; i < length; i++) {
  //     const randomIndex = Math.floor(Math.random() * characters.length);
  //     randomId += characters.charAt(randomIndex);
  //   }
  
  //   return randomId;
  // }

  const handleShopButtonClick = () => {
    console.log("items in shop block: ",items);
    //const randomId = generateRandomId();
  }

  const handleDelteItems = (id) => {
    let removedItem = items.find(item => item.id === id);
// If the item is found, remove it from the array and update the count
  if (removedItem) {
    // Remove the item from the array
    const newArray = items.filter(item => item !== removedItem);

    // Update the count by subtracting the quantity of the removed item
      setCartItems(cartItems-removedItem.quantity);
      setItems(newArray);
    }
  }
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      {
        items.length>0 ? 
        (<table>
          <thead>
            <tr>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Item Quantity</th>
              <th>Total Price</th>
              <th>Shop</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td><img src={item.imageUrl} alt={item.name} style={{ width: '100px', height: '100px' }} /></td>
                <td><h3>{item.name}</h3></td>
                <td><h3>{item.quantity}</h3></td>
                <td><h3>${(item.price).toFixed(2)}</h3></td>
                <td>
                  <Link to ={`/product/order/${item.id}`}>
                      <button onClick={() => handleShopButtonClick()}>Shop</button>
                      
                  </Link>
                </td>
                <td>
                  <button onClick = { () => handleDelteItems(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
      </table>) : (<div><h2>No items in Cart!</h2></div>)
      }
    </div>
  );
};

export default Cart;

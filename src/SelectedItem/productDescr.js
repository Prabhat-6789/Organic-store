import { useState,useEffect, useContext } from 'react';
import UserContext from '../Context/userContext';
import './productDescr.css';
import Notification from '../Components/Notification/notification';
//import CartProvider from '../cartContext';
  
const ProductDescr = ({productId,prod,productName,productRate}) => {
    const [count, setCount] = useState(1);
    const [editable, setEditable] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [showNotification, setShowNotification] = useState(false);
    
    const {cartItems,setCartItems,items,setItems} = useContext(UserContext);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const handleIncrement = () => {
      setCount((prevCount) => prevCount + 1);
    };
  
    const handleDecrement = () => {
      setCount((prevCount) => Math.max(1, prevCount - 1));
    };
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleInputBlur = () => {
      setEditable(false);
      setCount(Number(inputValue) || 0);
    };
  
    const handleEditClick = () => {
      setEditable(true);
      setInputValue(String(count));
    };

  const handleAddToCart = () => {
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCartItems(cartItems + count);
      
      const foundObject = items.find(obj => obj.id === productId);
      foundObject ? 
      (()=> 
      {
        const roundedPrice = foundObject.price;
        const roundedTotal = (count * productRate);

        foundObject.price = (roundedPrice + roundedTotal);
        foundObject.quantity = foundObject.quantity + count;
      })()
      : ( () => {
        const newItem = {
          id: productId,
          name: productName, // Replace with actual name
          imageUrl: prod, // Replace with actual image URL
          quantity: count,
          price: productRate*count
        };
  
        const newArray = [...items, newItem];
        setItems(newArray);
        console.log("items in product Descr: ",items);
      })()

      //setCartCount((prevCount) => prevCount + 2);

      // Show the notification
      setShowNotification(true);

      // Hide the notification after a delay (e.g., 3 seconds)
      setTimeout(() => {
        setShowNotification(false);
        setCount(0);
      }, 3000);
  };

    const handleNotificationClose = () => {
      // Handle the "Cut" action (e.g., clear the cart)
        setCount(0);
        setShowNotification(false);
      };

    return ( 
        <div>
            <div style={{display:'flex',justifyContent:'space-around'}}>
                <div style={{marginBottom:'50px'}}>
                    <img src={prod} style={{width:'400px',height:'400px'}}/>
                </div>

                <div style={{width:'50%',marginBottom:'50px'}}>
                    <div style={{textAlign:'center'}}>
                        <h1>{productName}</h1>
                        <h2>${productRate.toFixed(2)}</h2>
                    </div>
                    <div style={{textAlign:'center',width:'70%',marginLeft:'80px',marginTop:'50px'}}>
                        <p>
                            Neque porro quisquam est, qui dolore 
                            ipsum quia dolor sit amet, consectetur 
                            adipisci velit, sed quia non incidunt lores 
                            ta porro ame. numquam eius modi tempora 
                            incidunt lores ta porro ame.
                        </p>
                    </div>

                    <div style={{display:'flex',justifyContent:'space-around',marginRight:'120px'}}>
                        <div className="counter">
                            <button onClick={handleDecrement}>-</button>
                            {editable ? (
                                <input
                                type="number"
                                value={inputValue}
                                onChange={handleInputChange}
                                onBlur={handleInputBlur}
                                autoFocus
                                />
                            ) : (
                                <span onClick={handleEditClick}>{count}</span>
                            )}
                            <button onClick={handleIncrement}>+</button>
                        </div>

                        <div className="app-container">
                          <button onClick={handleAddToCart} style={{backgroundColor:'green',border:'1px solid green',borderRadius:'5px'}}>Add to Cart</button>
                          {showNotification && (
                            <Notification onClose={handleNotificationClose} cartCount={count} />
                          )}
                      </div>

                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ProductDescr;
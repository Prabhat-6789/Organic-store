import { useState,useEffect,useContext } from "react";
import UserContext from "../../Context/userContext";
import { useParams } from 'react-router-dom';
import './paymentForm.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import OrderSummary from "./orderSummary";

const OrderPlacement = () => {
    const {items,setItems,cartItems,setCartItems} = useContext(UserContext);
    const { id } = useParams();
    const [check,setCheck] = useState(false);
    const [item,setItem] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
      });

      const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
      });

    useEffect(()=>{
        let temp = items.find(it => it.id === parseInt(id, 10));
        setItem(temp);
        console.log("items: ",items);
        console.log("id:",id,"temp: ",temp);
    },[])
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    
        // Clear the error message when the user starts typing
        setFormErrors({
          ...formErrors,
          [name]: '',
        });
      };
    
      const validateForm = () => {
        let valid = true;
    
        // Validate name
        if (!formData.name.trim()) {
          setFormErrors({
            ...formErrors,
            name: 'Please enter your name',
          });
          valid = false;
        }
    
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          setFormErrors({
            ...formErrors,
            email: 'Please enter a valid email address',
          });
          valid = false;
        }
    
        // Validate phone
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(formData.phone)) {
          setFormErrors({
            ...formErrors,
            phone: 'Please enter a valid 10-digit phone number',
          });
          valid = false;
        }
    
        // Validate address
        if (!formData.address.trim()) {
          setFormErrors({
            ...formErrors,
            address: 'Please enter your address',
          });
          valid = false;
        }
    
        return valid;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (validateForm()) {
          // Form submission logic
          setTimeout(()=>{setCheck(true)},1000);
          console.log('Form submitted:', formData);
        } 
        
        else {
          console.log('Form not submitted due to validation errors');
        }
      };
    

    return ( 
      <div>
      {
          !check ? 
        (<div style = {{display:'flex',justifyContent:'space-around'}}>
            <div className="payment-form-container">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    </label>
                    <p className="error">{formErrors.name}</p>
                </div>

                <div>
                    <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    </label>
                    <p className="error">{formErrors.email}</p>
                </div>

                <div>
                    <label>
                    Phone:
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    </label>
                    <p className="error">{formErrors.phone}</p>
                </div>

                <div>
                    <label>
                    Address:
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    ></textarea>
                    </label>
                    <p className="error">{formErrors.address}</p>
                </div>

                <div style={{display:'flex',justifyContent:'center'}}>
                        <button type="submit">Submit Payment</button>
                        
                </div>
                </form>
            </div>

            <div>
                <div style={{marginTop:'80px'}}>
                    <img src={item.imageUrl} style={{width:'250px',height:'250px'}}/>
                </div>
                <div style={{textAlign:'center'}}>
                    {item.price ? (
                    <h3>Amount: ${item.price.toFixed(2)}</h3>
                    ) : null}
                </div>
            </div>
      </div>) : 

      (<OrderSummary id={id}/>)
      }
    </div>  
     );
}
 
export default OrderPlacement;
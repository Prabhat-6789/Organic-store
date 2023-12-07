import './discount.css';
import { FaCartArrowDown } from 'react-icons/fa';
import { useEffect } from 'react';
const Discount = () => {
    
    const handleButtonClick = () => {
        // Your API request logic here
        // For example, fetch('your-api-url').then(response => response.json()).then(data => console.log(data));
    
        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    
      // Scroll to the top when the component mounts
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return ( 
        <div className='arrow'>
                <div>
                    <h2 style={{color:'white'}}>Get 25% Off on your First purchase! </h2>
                </div>

                <div style={{textAlign:'center',margin:'20px'}}>
                                <button onClick={handleButtonClick}
                                                style={{width:'150px',
                                                height:'40px',
                                                backgroundColor:'#568203',
                                                color: '#ffffff',
                                                borderRadius:'5px',
                                                border:'1px solid #568203',
                                                cursor:'pointer'}}>
                                    <FaCartArrowDown/> Shop Now
                                </button>
                </div>
            </div>
     );
}
 
export default Discount;
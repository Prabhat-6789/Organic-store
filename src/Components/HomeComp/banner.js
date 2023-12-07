import { FaCartArrowDown } from 'react-icons/fa';
import { useEffect } from 'react';
import './banner.css';
const Banner = () => {
    const bannerImageUrl = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/organic-products-hero.png';
    const leafImageUrl = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png';
    
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
        <div className="banner-parent">
            <div className="banner-left">
                <img src={bannerImageUrl} className="bannerImage-left"/>
            </div>

            <div className="banner-right">
                <img src = {leafImageUrl}/>
                <div>
                    <h3>Best quality products</h3>
                    <h1>Join The Organic Movement!</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    
                    <div style={{textAlign:'center',margin:'70px'}}>
                        <button onClick={handleButtonClick}
                                        style={{width:'150px',height:'40px',
                                        backgroundColor:'#568203',
                                        color: '#ffffff',
                                        borderRadius:'5px',
                                        border:'1px solid #568203',
                                        cursor:'pointer'}}>
                            <FaCartArrowDown/> Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Banner;
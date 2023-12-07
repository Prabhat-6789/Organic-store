import { Link } from 'react-router-dom';
import './footer.css';
import { FaInstagramSquare,FaTwitterSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
const Footer = () => {
    const organicImageUrl = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/organic-store-white-logo.png';
    const playStoreImageUrl = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/play-store.png';
    const appleStoreImageUrl = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/app-store.png';
    const handleLinkClick = () => {
        // Reload the page to start from the top
        // window.location.reload();
        window.scrollTo(0, 0);
      };

    return ( 
        <div>
            <footer>
                <div className="div-up">
                    <div className="div-up-A">
                        <div style={{display:'flex',justifyContent:'center',marginBottom:'20px'}}>
                            <Link to="/home" onClick={handleLinkClick}>
                                <img src={organicImageUrl}/>
                            </Link>
                        </div>
                        <div style={{textAlign:'center',color:'white'}}>
                            <h3>
                                Maecenas mi justo, interdum at consectetur vel, 
                                tristique et arcu. Ut quis eros blandit, 
                                ultrices diam in, elementum ex. 
                                Suspendisse quis faucibus urna. 
                                Suspendisse pellentesque.
                            </h3>
                        </div>
                    </div>

                    <div className="div-up-B">
                        <div style={{textAlign:'center',color:'white',marginBottom:'20px'}}>
                            <h3>Quick Links</h3>
                        </div>
                        
                        <div style={{marginBottom:'30px'}}>
                            <div style={{marginBottom:'10'}}>
                                <Link to="/about" style={{color:'white',textDecoration:'none',fontSize:'20px'}}>About</Link>
                            </div>
                            <div>
                                <Link to="/cart" style={{color:'white',textDecoration:'none',fontSize:'20px'}}>Cart</Link>
                            </div>
                            <div style={{marginBottom:'10'}}>
                                <Link to="/contact" style={{color:'white',textDecoration:'none',fontSize:'20px'}}>Contact</Link>
                            </div>

                            <div style={{textAlign:'center'}}>
                            <h2>Site Links</h2>
                        </div>

                            <div style={{marginBottom:'30px'}}>
                                <div style={{marginBottom:'10'}}>
                                    <Link to="/home" onClick={handleLinkClick}
                                    style={{color:'white',textDecoration:'none',fontSize:'20px'}}>Privacy Policy</Link>
                                </div>
                                <div>
                                    <Link to="/home" onClick={handleLinkClick}
                                    style={{color:'white',textDecoration:'none',fontSize:'20px'}}>Shipping Details</Link>
                                </div>
                                <div style={{marginBottom:'10'}}>
                                    <Link to="/home" onClick={handleLinkClick}
                                    style={{color:'white',textDecoration:'none',fontSize:'20px'}}>Offers and Coupons</Link>
                                </div>

                                <div style={{marginBottom:'10'}}>
                                    <Link to="/home" onClick={handleLinkClick}
                                    style={{color:'white',textDecoration:'none',fontSize:'20px'}}>Terms and Conditions</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="div-up-C">
                        <div style={{color:'white',textAlign:'center',marginRight:'10px'}}>
                            <h2>Download our Mobile App</h2>
                        </div>

                        <div style={{color:'white',textAlign:'center',fontSize:'20px'}}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Donec aliquam gravida sollicitudin. Praesent porta enim mi, 
                                non tincidunt libero interdum sit amet.
                            </p>
                        </div>

                        <div className='storeImage'>
                            <div>
                                <img src={playStoreImageUrl} style={{width:'130px'}}/>
                            </div>
                            <div>
                                <img src={appleStoreImageUrl} style={{width:'130px'}}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="div-down">
                    <div className="div-down-A" style={{color:'white'}}>
                        <h4>Copyright © 2023 | Organic Store</h4>
                    </div>

                    <div className="div-down-B">
                        <div style={{display:'flex',justifyContent:'space-around',marginTop:'20px'}}>
                            <FaSquareFacebook style={{color:'white',marginRight:'10px'}}/>
                            <FaInstagramSquare style={{color:'white',marginRight:'10px'}}/>
                            <FaTwitterSquare style={{color:'white',marginRight:'20px'}}/>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
     );
}
 
export default Footer;
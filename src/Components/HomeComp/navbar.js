import './navbar.css';
import { FaCartArrowDown } from "react-icons/fa";
import { RiAccountPinCircleFill } from "react-icons/ri";
import {Link} from 'react-router-dom';
import { useContext } from 'react';

import About from '../About/about';
import UserContext from '../../Context/userContext';
const Navbar = () => {
    const imageUrl = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg';
    //const { state } = useCart();
    //const { cart,getTotalPrice } = useCart();
    const {cartItems} = useContext(UserContext);
    return ( 
        <div className="Navbar-parent">
            {/* Navbar left side start which includes image and button of everything,groceries and juice*/}
            <div className="Navbar-left">
                {/*
                <button className='Image-left'>
                    <img src={imageUrl} alt="Description of the image"/>
                </button>
                */}
                <Link to="/home">
                    <img src={imageUrl}/>
                </Link>
                <div className='Button-left'>
                    {/*
                    <button className='everything'>everything</button>
                    <button className='groceries'>groceries</button>
                    <button className='juice'>juice</button>
                    */}
                    <Link to="/everything" style={{color:'black',
                                            marginRight:'10px',
                                            textDecoration:'none'}}>everything</Link>

                    <Link to="/groceries" style={{color:'black',
                                            marginRight:'10px',
                                            textDecoration:'none'}}>groceries</Link>
                    <Link to="/juice" style={{color:'black',textDecoration:'none'}}>Juice</Link>
                </div>
            </div>
            {/*Navbar left side ends*/}

            {/*Navbar right side start which contains button and some icons*/}
            <div className="Navbar-right">
                <div className='button-right'>
                    {/*
                    <button className='about'>About</button>
                    <button className='contact'>Contact</button>
                    */}
                    <Link to="/about" style={{color:'black',
                                            marginRight:'5px',
                                            textDecoration:'none'}}>About</Link>
                    <Link to="/contact" style={{color:'black',textDecoration:'none',marginRight:'10px'}}>Contact</Link>
                </div>

                <div className='icon-parent'>
                    {/*}
                    <button className='cart-icon'>
                        <FaCartArrowDown />
                    </button>
                    */}
                    <Link to="/cart" style={{color:'green',marginRight:'10px'}}>
                        <FaCartArrowDown />
                        <span>{cartItems}</span>
                    </Link>
                    {/*}
                    <button className='account-icon'>
                        <RiAccountPinCircleFill />
                    </button>
                    */}
                    <Link to="/profile" style={{color:'green',marginRight:'10px'}}>
                        <RiAccountPinCircleFill />
                    </Link>
                </div>
            </div>
            {/*Navbar right side ends*/}
        </div>
     );
}
 
export default Navbar;
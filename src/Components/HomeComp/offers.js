import Perk from "./perk";
import './offers.css';
import { FaTruck,FaMoneyBillAlt,FaRecycle} from "react-icons/fa";
import { RiContactsBookFill } from "react-icons/ri";

const Offers = () => {
    const divContent1 = <div style={{padding:'5px',color:'white'}}>Free Shipping</div>;
    const divContent2 = <div style={{padding:'5px',color:'white'}}>Certified Organic</div>;
    const divContent3 = <div style={{padding:'5px',color:'white'}}>Huge Savings</div>;
    const divContent4 = <div style={{padding:'5px',color:'white'}}>Easy Returns</div>;
    const component1 = <FaTruck style={{width:'20px',color:'#568203'}}/>;
    const component2 = <RiContactsBookFill style={{width:'20px',color:'#568203'}}/>;
    const component3 = <FaMoneyBillAlt style={{width:'20px',color:'#568203'}}/>;
    const component4 = <FaRecycle style={{width:'20px',color:'#568203'}}/>;
    const parContent1 = <p style={{color:'white',
                        textAlign:'center',
                        fontSize:'20px'}}>Above $5 only</p>
    const parContent2 = <p style={{color:'white',
                        textAlign:'center',
                        fontSize:'20px'}}>100% Guarantee</p>
    const parContent3 = <p style={{color:'white',
                        textAlign:'center',
                        fontSize:'20px'}}>At Lowest Price</p>
    const parContent4 = <p style={{color:'white',
                        textAlign:'center',
                        fontSize:'20px'}}>No Questions Asked</p>         
    return ( 
        <div className="offer-parent">
            <Perk componentToRender={component1} divContent={divContent1} parContent={parContent1}/>
            <Perk componentToRender={component2} divContent={divContent2} parContent={parContent2}/>
            <Perk componentToRender={component3} divContent={divContent3} parContent={parContent3}/>
            <Perk componentToRender={component4} divContent={divContent4} parContent={parContent4}/>
        </div>
     );
}
 
export default Offers;
import Medium from "./medium";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Dropdown from "./dropDown";
const Contact = () => {
    const imageUrl1 = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/basil-leaf.png';
    const phone = <FaPhoneAlt style={{color:'green',width:'50px'}}/>;
    const mail = <IoMdMail style={{color:'green',width:'50px'}}/>
    const location = <FaLocationDot style={{color:'green',width:'50px'}}/>;
    const p = <p>+123 456 7890</p>
    const m = <p>info@example.com</p>
    const l = <p>1569 Ave, New York,
                NY 10028, USA</p>
    
    const ques=<p>  I am item content. Click edit button to change this text. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
                luctus nec ullamcorper mattis, pulvinar leo.
            </p>
    const q1=<h4>Pulvinar nostrud class cum facilis?</h4>
    const q2=<h4>Pon excepturi numquam, facilis?</h4>
    const q3=<h4>Pon excepturi numquam, facilis?</h4>
    const q4=<h4>Pon excepturi numquam, facilis?</h4>
    const q5=<h4>Consequat nesciunt fusce facilisi?</h4>
    const q6=<h4>Consequat nesciunt fusce facilisi?</h4>
    return ( 
        <div>
            <div style={{display:'flex',justifyContent:'center'}}>
                <h1>Get in Touch</h1>
            </div>

            <div style={{display:'flex',justifyContent:'center',marginTop:'50px'}}>
                <img src = {imageUrl1}/>
            </div>
            <div style = {{display:'flex',justifyContent:'space-around',marginTop:'50px',marginBottom:'50px'}}>
                <Medium icon={phone} a={p}/>
                <Medium icon={mail} a={m}/>
                <Medium icon={location} a={l}/>
            </div>
        </div>
     );
}
 
export default Contact;
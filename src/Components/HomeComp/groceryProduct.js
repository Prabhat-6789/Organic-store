import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './groceryProduct.css';
import { CiStar } from "react-icons/ci";
const GroceryProduct = ({productId,prod,productName,productRate}) => {
    const star = <CiStar/>;
    return (
        <div>
            <Link to={`/product/${productId}`}>
                <div style={{textAlign:'center'}}>
                    <img src={prod} style={{width:'250px',height:'300px'}}/>
                </div>
            </Link>

            <div style={{textAlign:'center'}}>
                <p style = {{color:'#5a3d5c'}}>groceries</p>
                <p>
                    {star}
                    {star}
                    {star}
                    {star}
                </p>
                <Link to={`/product/${productId}`} style={{color:'black',textDecoration:'none'}}><h5>{productName}</h5></Link>
                <h5>${productRate.toFixed(2)}</h5>
            </div>
        </div>
     );
}
 
export default GroceryProduct;
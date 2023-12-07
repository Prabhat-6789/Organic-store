import './bestSellingProducts.css';
import GroceryProduct from './groceryProduct';
import { CiStar } from "react-icons/ci";

const BestSellingProducts = ({products}) => {
     const leafUrl = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png';
    const star = <CiStar/>;
    return ( 
        <div style={{marginBottom:'40px'}}>
            <h1 style = {{textAlign:'center'}}>Best Selling Products</h1>
                <div className="leafImageBestSelling">
                    <img src={leafUrl}/>
                </div>
            <div className='grocery-product'>
            {products.map((product) => (
                <GroceryProduct productId={product.id} prod={product.image} productName={product.name} productRate={product.price}/>
                ))}
            </div>
        </div>
     );
}
 
export default BestSellingProducts;
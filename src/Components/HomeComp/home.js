import Banner from "./banner";
import BestSellingProducts from "./bestSellingProduct";
import CustomerReviews from "./customerReviews";
import Discount from "./discount";
import Logo from "./logo";
import Offers from "./offers";
import Trending from "./trending";
import Vegetables from "./vegetables";

const Home = ({products}) => {
    return ( 
        <div>
            <Banner/>
            <Offers/>
            <BestSellingProducts products={products}/>
            <Vegetables/>
            <Discount/>
            <Trending products={products}/>
            <CustomerReviews/>
            <Logo/>
        </div>
     );
}
 
export default Home;
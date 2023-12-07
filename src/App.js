import Home from "./Components/HomeComp/home";
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Navbar from "./Components/HomeComp/navbar";
import About from "./Components/About/about";
import Groceries from "./Components/Groceries/groceries";
import Juice from "./Components/Juice/juice";
import Contact from "./Components/Contact/contact";
import Cart from "./Components/Cart/cart";
import Profile from "./Components/Profile/profile";
import Footer from "./Components/HomeComp/footer";
import Products from "./Components/Everything/products";
import ProductDetails from "./SelectedItem/selectItem";
import UserContextProvider from "./Context/userContextProvider";
import OrderPlacement from "./Components/Order/orderDetails";
import OrderSummary from "./Components/Order/orderSummary";

function App() {
  const leafUrl = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png';
    const product1Url = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-600x600.jpg';
    const product2Url = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/sanitizer-600x600.jpg';
    const product3Url = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/red-chillies-600x600.jpg';
    const product4Url = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/edible-oil-600x600.jpg';
    const product1 = <img src={product1Url} style={{width:'250px',height:'300px'}}/>;
    const product2 = <img src={product2Url} style={{width:'250px',height:'300px'}}/>;
    const product3 = <img src={product3Url} style={{width:'250px',height:'300px'}}/>;
    const product4 = <img src={product4Url} style={{width:'250px',height:'300px'}}/>;

    const products1 = [
        { id: 1, name: 'Assorted Coffee',    image: product1Url, price: 35.0 },
        { id: 2, name: 'Natural Extracted Edible Oil', image: product2Url, price: 34.0 },
        { id: 3, name: 'Handpicked Red Chillies', image: product3Url, price: 25.0 },
        { id: 4, name: 'Hand Sanitizer', image: product4Url, price: 34.0 }
        // ... add more products
      ];

      const imageUrl1 = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-600x600.jpg';
      const imageUrl2 = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/face-wash-600x600.jpg';
      const imageUrl3 = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/eggs-600x600.jpg';
      const imageUrl4 = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/organic-honey-600x600.jpg';
      const imageUrl5 = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/wheat-600x600.jpg';
      const imageUrl6 = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/edible-oil-600x600.jpg';
      const imageUrl7 = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/diabetic-cookies-600x600.jpg';
      const imageUrl8 = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/cashew-butter-500-600x600.jpg';
      const imageUrl9 = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/red-chillies-600x600.jpg';
      const imageUrl10 = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/orage-juice-kariz-600x600.jpg';
      const imageUrl11 = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/pulses-600x600.jpg';
      const imageUrl12 = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/sanitizer-600x600.jpg';

      const products2 = [
        { id: 1, name: 'Assorted Coffee',    image: imageUrl1, price: 35.0 },
        { id: 2, name: 'Orgainc Face Scrub', image: imageUrl2, price: 25.0 },
        { id: 3, name: 'Farm Fresh Eggs', image: imageUrl3, price: 25.0 },
        { id: 4, name: 'Fresh Organic Honey', image: imageUrl4, price: 34.0 },
        { id: 5, name: 'Wheat From Organic Farms', image: imageUrl5, price: 18.34 },
        { id: 6, name: 'Natural Extracted Edible Oil', image: imageUrl6, price: 34.0 },
        { id: 7, name: 'Diabetic Cookies', image: imageUrl7, price: 15.0 },
        { id: 8, name: 'Cashew Butter', image: imageUrl8, price: 19.0 },
        { id: 9, name: 'Handpicked Red Chillies', image: imageUrl9, price: 25.0 },
        { id: 10, name: 'Fresh Orange Juice', image: imageUrl10, price: 35.0 },
        { id: 11, name: 'Pulses From Organic Farm', image: imageUrl11, price: 15.0 },
        { id: 12, name: 'Hand Sanitizer', image: imageUrl12, price: 34.0 },
        // ... add more products
      ];

     // const { cart,getTotalPrice } = useCart();
  return (
    <div className="App">
      <Router>
          <UserContextProvider>
              <Navbar/>
              <div>
                <Switch>
                    <Route exact path="/"><Home products={products1}/></Route>
                    <Route exact path="/home"><Home products={products1}/></Route>
                    <Route exact path="/everything"><Products products={products2}/></Route>
                    <Route path="/about"><About/></Route>
                    <Route path="/groceries"><Groceries/></Route>
                    <Route path="/juice"><Juice/></Route>
                    <Route path="/contact"><Contact/></Route>
                    <Route path="/cart"><Cart/></Route>
                    <Route path="/profile"><Profile/></Route>
                    <Route path="/product/order/:id"><OrderPlacement/></Route>
                    <Route path="/product/:id"><ProductDetails products={products2}/></Route>
                    {/*<Route path="/order-summary/:id"><OrderSummary/></Route>*/}
                    <Route path="profile-view"><Profile/></Route>
                </Switch>
              </div>
              <Footer/>
          </UserContextProvider>
      </Router>
    </div>
  );
}

export default App;

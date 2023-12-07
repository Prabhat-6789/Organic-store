import './customerReviews.css';
import Review from './review';
import { FaArrowRight } from "react-icons/fa6";

const CustomerReviews = () => {
    const leafUrl = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png';
    const comment1 = <p style={{fontSize:'20px'}}>Click edit button to change this text. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                     </p>
    const comment2 = <p style={{fontSize:'20px'}}>Click edit button to change this text.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                     </p>
    
    const pic1Url = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/client02-free-img.png';
    const pic2Url = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/client01-free-img.png';
    const pic1 = <img src={pic1Url}/>;
    const pic2 = <img src={pic2Url}/>;
    const reviewer1 = <p style={{fontSize:'20px'}}>Mila Kunis</p>
    const reviewer2 = <p style={{fontSize:'20px'}}>Mike Sendler</p>
    return ( 
        <div>
            <div>
                <h1 style={{textAlign:'center'}}>Customer Reviews</h1>
            </div>

            <div className="leafImageBestSelling" style={{marginBottom:'90px'}}>
                <img src={leafUrl}/>
            </div>

            <div class="container">
                <div class="div1"><Review comment={comment1} pic={pic1} reviewer={reviewer1}/></div>
                <div class="div2"><h2>Deal Of The Day 15% Off On All Vegetables!</h2>
                <div style={{textAlign:'center',margin:'-300px'}}>
                        <button style={{width:'160px',height:'40px',
                                        backgroundColor:'#568203',
                                        color: '#ffffff',
                                        borderRadius:'5px',
                                        border:'1px solid #568203',
                                        cursor:'pointer',
                                        padding:'5px'}}>
                            Shop Now  <FaArrowRight/>
                        </button>
                    </div>
                </div>
                <div class="div3"><Review comment={comment2} pic={pic2} reviewer={reviewer2}/></div>
            </div>
        </div>
     );
}
 
export default CustomerReviews;
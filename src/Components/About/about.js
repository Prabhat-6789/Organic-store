import ImageSlider from "./imageSlider";
import { CiStar } from "react-icons/ci";
import { TiTickOutline } from "react-icons/ti";
import { FaCartArrowDown } from 'react-icons/fa';
import { useEffect } from "react";
const About = () => {
    const imageUrl1 = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/basil-leaf.png';
    const imageUrl2 = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2020/01/banner-01.jpg';
    const imageUrl3 = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-badge-freeimg.png';
    const imageUrl4 = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/client02-free-img.png'
    const imageUrl5 = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png';
    const star = <CiStar/>;

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
        <div>
            <div style={{display:'flex',justifyContent:'center'}}>
                <h1>About Us</h1>
            </div>

            <div style={{display:'flex',justifyContent:'center',marginTop:'50px'}}>
                <img src = {imageUrl1}/>
            </div>

            <div style = {{display:'flex',justifyContent:'space-between',marginTop:'50px'}}>
                <div style={{textAlign:'ceter',width:'45%'}}>
                    <h1>
                        We are your favourite Store
                    </h1>
                    <div style={{marginTop:'50px'}}>
                        <p style={{fontSize:'20px'}}>
                        Tuas quisquam quo gravida proident harum, 
                        aptent ligula anim consequuntur, ultrices mauris, 
                        nunc voluptates lobortis, varius, potenti placeat! 
                        Fuga omnis. Cubilia congue. Recusandae. Vero penatibus quasi!
                        Nostra tenetur dignissimos ultrices natus distinctio ultrices 
                        consequuntur numqu.
                        
                        <br/>
                        Officiis fuga harum porro et? Similique rhoncus atque! 
                        Netus blanditiis provident nunc posuere. Rem sequi, commodo, 
                        lorem tellus elit, hic sem tenetur anim amet quas, malesuada proident 
                        platea corrupti expedita.
                        </p>
                    </div>
                </div>
                <div style={{width:'45%'}}>
                <img src={imageUrl2} style={{width:'100%'}}/>
                </div>
            </div>

            <div style={{display:'flex',justifyContent:'space-between',marginTop:'70px',marginBottom:'70px'}}>
                <div style={{width:'50%'}}>
                    <div>
                        <ImageSlider/>
                    </div>

                    <div style={{marginLeft:'140px',color:'orange'}}>
                        <p>
                            {star}
                            {star}
                            {star}
                            {star}
                            {star}
                        </p>
                    </div>

                    <div>
                        <p style={{fontSize:'20px'}}>
                            Click edit button to change this text. 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                    </div>

                    <div style={{display:'flex',marginLeft:'120px'}}>
                        <div style={{marginRight:'20px'}}>
                            <img src={imageUrl4}/>
                        </div>
                        <div>
                            <h4>Mila Kunit</h4>
                        </div>
                    </div>
                </div>

                <div style={{width:'50%'}}>
                    <div style={{display:'flex',justifyContent:'space-around'}}>
                        <div>
                            <img src={imageUrl3}/>
                        </div>
                        <div>
                            <h2>Certified Products</h2>
                            <p style={{fontSize:'20px'}}>Click edit button to change this text. Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <h1>We Deal With Various Quality Organic Products!</h1>
                    </div>

                    <div style={{marginLeft:'15px'}}>
                        <img src={imageUrl5}/>
                    </div>

                    <div style = {{display:'flex',justifyContent:'space-around',marginTop:'10px'}}>
                        <div style={{margin:'10px'}}>
                            <p><TiTickOutline style={{color:'green'}}/> Fresh Fruit</p>
                            <p><TiTickOutline style={{color:'green'}}/> Dry Fruit</p>
                            <p><TiTickOutline style={{color:'green'}}/> Fresh Vegegatbles</p>
                            <p><TiTickOutline style={{color:'green'}}/> Dried Vegetables</p>
                            <p><TiTickOutline style={{color:'green'}}/> Dried Vegetables</p>
                        </div>
                        <div>
                            <p><TiTickOutline style={{color:'green'}}/> Beauty Products</p>
                            <p><TiTickOutline style={{color:'green'}}/> Milk Products</p>
                            <p><TiTickOutline style={{color:'green'}}/> Organic Products</p>
                            <p><TiTickOutline style={{color:'green'}}/> Organic Tea</p>
                        </div>
                    </div>

                    <div style={{textAlign:'center',marginTop:'40px'}}>
                        <button onClick={handleButtonClick}
                                        style={{width:'150px',height:'60px',
                                        backgroundColor:'#568203',
                                        color: '#ffffff',
                                        borderRadius:'5px',
                                        border:'1px solid #568203',
                                        cursor:'pointer'}}>
                            <FaCartArrowDown/> Start Shopping
                        </button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default About;
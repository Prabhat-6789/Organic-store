const Logo = () => {
    
    const logo1 = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-4.svg';
    const logo2 = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-5.svg';
    const logo3 = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-2.svg';
    const logo4 = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-3.svg';
    const logo5 = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-1.svg';
    return ( 
        <div style={{marginTop:'80px',display:'flex',justifyContent:'space-around'}}>
            <div style={{padding:'15px'}}>
                <h2>Featured Brands: </h2>
            </div>

            <div>
                <img src={logo1}/>
            </div>

            <div>
                <img src={logo2}/>
            </div>

            <div>
                <img src={logo3}/>
            </div>

            <div>
                <img src={logo4}/>
            </div>

            <div>
                <img src={logo5}/>
            </div>
        </div>
     );
}
 
export default Logo;
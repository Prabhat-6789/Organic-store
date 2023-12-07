import VegetableItem from './vegetableItem';
import './vegetables.css';
const Vegetables = () => {
    const leafImageUrl = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/basil-leaf.png';
    const productName1 = <h5 style={{textAlign:'center',fontSize:'20px'}}>Farm Fresh Fruits</h5>
    const productName2 = <h5 style={{textAlign:'center',fontSize:'20px'}}>Fresh Vegetables</h5>
    const productName3 = <h5 style={{textAlign:'center',fontSize:'20px'}}>Organic Legume</h5>
    const productDescr1 = <p style={{textAlign:'center',fontSize:'20px'}}>Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.</p>
    const productDescr2 = <p style={{textAlign:'center',fontSize:'20px'}}>Aliquam porta justo nibh, id laoreet sapien sodales vitae justo.</p>
    const productDescr3 = <p style={{textAlign:'center',fontSize:'20px'}}>Phasellus sed urna mattis, viverra libero sed, aliquam est.</p>
    const productImage1Url = 'https://media.istockphoto.com/id/182463420/photo/tangerine-duo-with-leafs.jpg?s=1024x1024&w=is&k=20&c=jv3rQq_ezIx168NfiCsmpiEAZ1RH588imArmkHsReKc=';
    const productImage2Url = 'https://media.istockphoto.com/id/673162168/photo/green-cabbage-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=wMuOWwv0uCep8fwcF4utoe9ZAnespfG8AyWgXDGAwA8=';
    const productImage3Url = 'https://media.istockphoto.com/id/997643598/photo/fresh-raw-whole-chickpeas.jpg?s=1024x1024&w=is&k=20&c=OpMq5I1mUCFfHUfYRL5ajLLBZw6h_wzb-bZ1c-pERwA=';
    const productImage1 = <img src={productImage1Url} style={{width:'200px',height:'150px'}}/>;
    const productImage2 = <img src={productImage2Url} style={{width:'200px',height:'150px'}}/>;
    const productImage3 = <img src={productImage3Url} style={{width:'200px',height:'150px'}}/>;

    return ( 
        <div>
            <div className="leaf-image">
                <img src={leafImageUrl}/>
            </div>
            <div className='vegetable-item'>
                <VegetableItem productName={productName1} 
                productImage={productImage1} 
                productDescr={productDescr1}/>
                <VegetableItem productName={productName2} 
                productImage={productImage2} 
                productDescr={productDescr2}/>
                <VegetableItem productName={productName3} 
                productImage={productImage3} 
                productDescr={productDescr3}/>
            </div>
        </div>
     );
}
 
export default Vegetables;
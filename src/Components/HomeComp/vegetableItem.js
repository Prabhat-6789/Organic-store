import { FaArrowRight } from "react-icons/fa6";
const VegetableItem = ({productName,productImage,productDescr}) => {
    return ( 
        <div style={{backgroundColor:'whitesmoke',width:'300px'}}>
            <div>
                {productName}
                {productDescr}
            </div>
            <div style={{textAlign:'center',margin:'60px'}}>
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
            <div>
                {productImage}
            </div>
        </div>
     );
}

export default VegetableItem;
import { CiStar } from "react-icons/ci";
const Review = ({comment,pic,reviewer}) => {
    
    const star = <CiStar style={{color:'orange',width:'20px'}}/>;
    return ( 
        <div>
            <div style={{textAlign:'center'}}>
                {star}
                {star}
                {star}
                {star}
                {star}
            </div>
            <div style={{textAlign:'center'}}>
                {comment}
            </div>
            <div style={{display:'flex',justifyContent:'space-around'}}>
                <div>
                    {pic}
                </div>
                <div>
                    {reviewer}
                </div>
            </div>
        </div>
     );
}
 
export default Review;
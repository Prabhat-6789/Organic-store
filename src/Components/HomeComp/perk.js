import './perk.css';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';


const Perk = ({ componentToRender, divContent, parContent}) => {
    
    //const history = useHistory();

  const handleButtonClick = () => {
    // Use history.push to navigate to the desired route
    //history.push('/home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return ( 
        <div style={{backgroundColor:'#353935',borderRadius:'5px'}}>
            <div className="perks">
                <button onClick={handleButtonClick}
                    style={{marginRight:'15px',
                    padding:'5px',
                    cursor:'pointer',
                    backgroundColor:'#353935',
                    border:'1px solid #353935',
                    borderRadius:'5px'
                    }}>
                    {componentToRender}
                </button>

                <button onClick={handleButtonClick}
                    style={{fontSize:'25px',
                    cursor:'pointer',
                    backgroundColor:'#353935',
                    border:'1px solid #353935',
                    borderRadius:'5px'
                    }}>
                    {divContent}
                </button>
            </div>
            {parContent}
        </div>
     );
}
 
export default Perk;
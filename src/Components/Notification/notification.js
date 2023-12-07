import './notification.css';

const Notification = ({ onClose, cartCount }) => {
    return (
        <div className="notification">
          <p>{cartCount} items added to the cart!</p>
          <button onClick={onClose}>Cut</button>
        </div>
      );
}
 
export default Notification;
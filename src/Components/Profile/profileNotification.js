import './profileNotification.css';

const ProfileNotification = ({onClose}) => {
    return ( 
        <div className="notification">
          <p>Loggedin successfully</p>
          <button onClick={onClose}>Cut</button>
        </div>
     );
}
 
export default ProfileNotification;
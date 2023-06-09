import { useAuth } from "../../contexts/auth-context";
import classes from "./Profile.module.css";
import { userImage } from "../../assets/images";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Profile = () => {
  const { authState, logout } = useAuth();
  const { user } = authState;
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
    toast.success("Logout successfully");
  };
  return (
    <div className={classes.profilePage}>
      <div className={classes.profileCard}>
        <h1>User Profile</h1>

        <img src={userImage} alt="" className={classes.userImage} />

        {user?.displayName && (
          <p>
            <strong>Name: </strong>
            {user.displayName}
          </p>
        )}

        {user?.displayName && (
          <p>
            <strong>Email: </strong>
            {user.email}
          </p>
        )}
        <button className={classes.logoutButton} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;

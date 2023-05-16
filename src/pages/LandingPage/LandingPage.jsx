import { useNavigate } from "react-router-dom";
import { headerImage } from "../../assets/images";
import classes from "./LandingPage.module.css";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img
        src={headerImage}
        alt=""
        className={classes.headerImage}
        onClick={() => navigate("/home")}
      />
    </div>
  );
};

export default LandingPage;

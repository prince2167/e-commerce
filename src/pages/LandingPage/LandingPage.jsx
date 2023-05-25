import { useNavigate } from "react-router-dom";
import { headerImage } from "../../assets/images";
import classes from "./LandingPage.module.css";
import { Footer } from "../../components/index";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.landingPage}>
      <main className={classes.main}>
        <img
          src={headerImage}
          alt=""
          className={classes.headerImage}
          onClick={() => navigate("/home")}
        />
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;

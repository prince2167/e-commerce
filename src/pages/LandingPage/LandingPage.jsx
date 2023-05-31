import { useNavigate } from "react-router-dom";
import { headerImage } from "../../assets/images";
import classes from "./LandingPage.module.css";
import { Footer } from "../../components/index";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.landingPage}>
      <div className={classes.headerImage}>
        <img src={headerImage} alt="" onClick={() => navigate("/home")} />
      </div>

      <div className={classes.categoryDescription}>
        <h1>CATEGORIES</h1>
        <p>
          We find the best suppliers and makers of fashion and fancy products.
        </p>
      </div>
      <div className={classes.categoryImages}>
        <div className={classes.mens}>
          <img
            src="https://res.cloudinary.com/dptfwcnro/image/upload/v1683872441/E-comm%20ATTIREX/Mens-Category_zjicre.webp"
            alt=""
          />
          <div className={classes.mensShopButton}>
            <h1>MENS</h1>
            <button onClick={() => navigate("/home")}>Shop Now</button>
          </div>
        </div>

        <div className={classes.leftImages}>
          <div className={classes.womens}>
            <img
              src="https://res.cloudinary.com/dptfwcnro/image/upload/v1683911125/E-comm%20ATTIREX/Womens-Category_iscqhs.jpg"
              alt=""
            />
            <div className={classes.womensShopButton}>
              <h1>WOMENS</h1>
              <button onClick={() => navigate("/home")}>Shop Now</button>
            </div>
          </div>

          <div className={classes.kids}>
            <img
              src="https://res.cloudinary.com/dptfwcnro/image/upload/v1683872443/E-comm%20ATTIREX/Kids-Category_mg6fmz.webp"
              alt=""
            />
            <div className={classes.kidsShopButton}>
              <h1>KIDS</h1>
              <button onClick={() => navigate("/home")}>Shop Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.sale}>
        <h1>SALE</h1>
        <p>The most awaiting sale is here to elevate your wardrobe.</p>
      </div>
      <div className={classes.salesImage}>
        <img
          src="https://res.cloudinary.com/dptfwcnro/image/upload/v1683903022/E-comm%20ATTIREX/Sale-Banner-1_mzj7ko.gif"
          alt=""
          onClick={() => navigate("/home")}
        />
        <img
          src="https://res.cloudinary.com/dptfwcnro/image/upload/v1683903949/E-comm%20ATTIREX/Sale-Banner-2_rifmbx.jpg"
          alt=""
          onClick={() => navigate("/home")}
        />
        <img
          src="https://res.cloudinary.com/dptfwcnro/image/upload/v1683903950/E-comm%20ATTIREX/Sale-Banner-3_si788m.jpg"
          alt=""
          onClick={() => navigate("/home")}
        />
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;

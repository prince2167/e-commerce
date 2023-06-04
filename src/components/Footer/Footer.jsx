import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
} from "../../assets/icon";
const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <div className={classes.info}>
        <div className={classes.aboutUs}>
          <h2>About Us</h2>
          <p>
            Clothify is a fashion e-commerce website website that provides
            high-quality products to our customers at affordable prices.
          </p>
        </div>

        <div className={classes.contactUs}>
          <h2>Contact Us</h2>
          <p>645 Main Street, Delhi, India</p>
          <p>(+91)1234567890</p>
          <p>info@Clothify.com</p>
        </div>

        <div className={classes.followLink}>
          <h2>Follow us</h2>
          <li className={classes.followIcons}>
            <Link target="_blank" to="https://github.com/prince2167">
              <AiFillGithub size="25" />
            </Link>
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/prince-kumar-singh-6893a41a1/"
            >
              <AiFillLinkedin size="25" />
            </Link>
            <Link
              target="_blank"
              to="https://www.instagram.com/me_princesingh/"
            >
              <AiOutlineInstagram size="25" />
            </Link>
            <Link target="_blank" to="https://twitter.com/me_princesingh">
              <AiOutlineTwitter size="25" />
            </Link>
          </li>
        </div>
      </div>
      <span>© 2023 CLOTHIFY.com</span>
    </div>
  );
};

export default Footer;

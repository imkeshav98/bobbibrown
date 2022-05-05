import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
      <div className="footer__top">
        <div className="footer__top_left">
          <h3>NEED HELP ?</h3>
          <ul>
            <li>Chat with an Artist</li>
            <li>Text An Artist</li>
            <li>Call Us (877)-310-9222</li>
            <li>Shipping & Returns</li>
            <li>FAQS</li>
            <li>Carrers</li>
          </ul>
        </div>
        <div className="footer__top_middle">
          <h3>MY BOBBI BROWN</h3>
          <ul>
            <li>BB Access</li>
            <li>MY Account</li>
            <li>My Orders</li>
            <li>Store Locator</li>
          </ul>
        </div>
        <div className="footer__top_right">
          <div className="footer__newsletter">
            <input type="email" placeholder="ENTER YOUR EMAIL" />
            <input type="number" placeholder="ENTER YOUR PHONE" />
            <button>SUBMIT</button>
          </div>
          <h3>FOLLOW US</h3>
          <div className="footer__socials">
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <FaInstagram />
            <FaPinterest />
          </div>
        </div>
      </div>
      <hr className="footer__divider" />
      <div className="footer__bottom">
        <div className="footer__bottom_left">
          <span>
            © Bobbi Brown Professional Cosmetics, Inc. All worldwide rights
            reserved.
          </span>
        </div>
        <div className="footer__bottom_right">
          <div>
            <ul>
              <li>Terms & Conditions</li>
              <li>California Do Not Sell My Personal Information</li>
              <li>Accessibility</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Interest Based Ads</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

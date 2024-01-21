import './Footer.css'
import { RiMapPinFill, RiMailFill, RiPhoneFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <footer id="contact">
      <div className="footer-container container">
        <div className="footer-box">
          <div className="footer-title">Promo</div>
          <img src="/footer.jpg" alt="" />
          <h4>Revolutionize Your Workout: Unveiling 2024's Hottest Gym Gear!</h4>
          <p>Promo Only last this month - January</p>
        </div>
        <div className="footer-box">
          <div className="footer-title">Quick Links</div>
          <div className="footer-row">
            <div className="col">
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#categories">Categories</a></li>
              <li><a href="#deal">Deals</a></li>
            </div>
            <div className="col">
              <li><a href="#deal">Shop</a></li>
              <li><a href="#shop">Best sales</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="ToS">Terms Service</a></li>
            </div>
          </div>
        </div>
        <div className="footer-box">
          <h5 className="footer-title">Contact us</h5>
          <p><span><RiMapPinFill/></span> Makati City</p>
          <p><span><RiPhoneFill/></span> +63 912 3456 894</p>
          <p><span><RiMailFill/></span> gymrat@gmail.com</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
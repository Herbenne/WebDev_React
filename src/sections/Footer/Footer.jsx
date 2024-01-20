import './Footer.css'
import { RiMapPinFill, RiMailFill, RiPhoneFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <footer id="contact">
      <div className="footer-container container">
        <div className="footer-box">
          <div className="footer-title">Promo</div>
          <img src="/footer.jpg" alt="" />
          <h4>New Gym Equipments in 2024</h4>
          <p>Promo from Jan 1 2024</p>
        </div>
        <div className="footer-box">
          <div className="footer-title">Quick Links</div>
          <div className="footer-row">
            <div className="col">
              <li><a href="">Home</a></li>
              <li><a href="">Features</a></li>
              <li><a href="">Categories</a></li>
              <li><a href="">Deals</a></li>
              <li><a href="">Shop</a></li>
            </div>
            <div className="col">
              <li><a href="">Best sales</a></li>
              <li><a href="">New products</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Terms Service</a></li>
              <li><a href="">Latest Trends</a></li>
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
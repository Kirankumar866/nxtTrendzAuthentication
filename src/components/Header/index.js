// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <img
      className="websitelogo"
      alt="website logo"
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
    />
    <ul className="nav-menu-desktop">
      <Link to="/" className="link-item">
        <li>Home</li>
      </Link>
      <Link to="/products" className="link-item">
        <li>Products</li>
      </Link>
      <Link to="/cart" className="link-item">
        <li>Cart</li>
      </Link>
    </ul>
    <button type="button" className="desktopLogout">
      Logout
    </button>
    <button type="button" className="logout-mobile-btn">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="logout icon"
        className="logout-icon"
      />
    </button>
    <ul className="nav-menu-mobile">
      <Link to="/" className="link-item">
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="home"
          />
        </li>
      </Link>
      <Link to="/products" className="link-item">
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="product"
          />
        </li>
      </Link>
      <Link to="/cart" className="link-item">
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="cart"
          />
        </li>
      </Link>
    </ul>
  </nav>
)

export default Header

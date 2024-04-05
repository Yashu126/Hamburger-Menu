// Write your code here
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import './index.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

const Header = () => (
  <nav>
    <div className="nav-con">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          width={40}
        />
      </Link>
      <Popup
        modal
        trigger={
          <button data-testid="hamburgerIconButton" type="button">
            .<GiHamburgerMenu />
          </button>
        }
      >
        {close => (
          <div>
            <button
              data-testid="closeButton"
              onClick={() => close()}
              type="button"
            >
              .<IoMdClose />
            </button>
            <ul className="pop-up-con">
              <li>
                <Link className="link-con" onClick={() => close()} to="/">
                  <AiFillHome />
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link className="link-con" onClick={() => close()} to="/about">
                  <BsInfoCircleFill />
                  <p>About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </nav>
)

export default Header

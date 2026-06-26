import { Link } from 'react-router-dom'
import MainNav from '../navigation/MainNav'
import MobileMenu from '../navigation/MobileMenu'
import Button from '../common/Button'
import './Header.scss'

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-header__logo">
          CoolRoute
        </Link>
        <MainNav />
        <div className="site-header__actions">
          <Button to="/login">Login</Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

export default Header

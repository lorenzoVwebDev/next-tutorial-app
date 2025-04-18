import './header.scss'
function Header() {
  return (
    <header className="header">
    <div className="logo"><span>L</span>orenzo.</div>
    <ul className="navList">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </header>
  )
}

export default Header;
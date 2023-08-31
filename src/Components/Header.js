import './Header.css'

const Header = () => {
  return (
    <header>
      <nav>
        <h2>Solymos Ádám</h2>
        <ul className="list">
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header

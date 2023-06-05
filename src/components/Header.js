

const Header = ({prefix}) => {
  return(
    <header className="App-header">
      <h1 className="Header-name">Amy Potter</h1>
        <nav className="Header-nav">
          <ul>
            <a href={`${prefix}/`}>About</a>
            <a href={`${prefix}/portfolio`}>Portfolio</a>
            <a href={`${prefix}/resume`}>Resume</a>
            <a href={`${prefix}/contact`}>Contact</a>
          </ul>
        </nav>
    </header>



  )
}

export default Header;


const Header = () => {
  return(
    <header className="App-header">
      <h1 className="Header-name">Amy Potter</h1>
        <nav className="Header-nav">
          <ul>
            <a className="nav-link active"  href="/">About</a>
            <a className="nav-link active"  href="/Portfolio">Portfolio</a>
            <a className="nav-link active" href="/Resume">Resume</a>
            <a className="nav-link active" href="/Contact">Contact</a>
          </ul>
        </nav>
    </header>



  )
}

export default Header;
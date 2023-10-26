import './NavBar.css'
function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top sticky-top navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Celebration
          </a>
          
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading1">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading2">
                  Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading3">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading4">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar

import "./Header.css";


function Header() {
  return (
    <header className="header">
      <h1>MyWebsite</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

export default Header;

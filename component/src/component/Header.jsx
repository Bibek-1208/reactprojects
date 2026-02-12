import "./Header.css";

function Header({a}) {
    return(
        <header className="header">

            <h1 className="logo">{a}</h1>
      <div>

            <a className="a" href="about">{a}</a>
            <a className="a" href="contact">contact</a>
            <a className="a" href="services">services</a>
    </div>

        <div>
            <a  className="b" href="">A</a>
             <a className="b" href="">B</a>
              <a className="b"href="">C</a>
        </div>



        </header>
    )
}

export default Header;
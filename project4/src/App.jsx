import react from "react";
import "./App.css";

function App () {
  return (

     <div className ="app">
       {/* headear */}
          <header className="header">
            <div className="logo"> LOGO </div>
            <nav className="nav">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">services</a>
            </nav>
             
       </header>

       {/* hero section */}
       <section className="hero">
         <div className="hero-content">
             <h1>Welcome to the company website</h1>
             <p>Learn more about our services and products.</p>
             <button className="button">Get Started</button>
         </div>

       </section>
 
           {/* card */}
          <section className="cards">
              <h2 className="cards-title">Our Services</h2>
              <div className="card-container">
                  <div className="card">
                      <h3>name</h3>
                      <p>mail</p>
                      <p>number</p>
                  </div>
                  <div className="card">
                      <h3>name</h3>
                      <p>mail</p>
                      <p>number</p>
                  </div>
                  <div className="card">
                      <h3>name</h3>
                      <p>mail</p>
                      <p>number</p>
                  </div>
                  <div className="card">
                      <h3>name</h3>
                      <p>mail</p>
                      <p>number</p>
                  </div>

              </div>
          </section>







    
     </div>
  )     
} 
export default App;
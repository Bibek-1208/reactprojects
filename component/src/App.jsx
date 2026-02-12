import Header from "./component/Header.jsx";
import Hero from "./component/Hero.jsx";
import Ap from "./component/counter.jsx";
import { useState } from "react";
import "./App.css";

function App() {
    return(
<>
    <Header a="Bibek" />
    <Hero b="A normal chart in HTML is best created using <canvas> with libraries like Chart.js or simply <table> tags for structured data. For dynamic, visual charts, Chart.js offers bar, line, and pie charts. Basic, non-visual data is organized with <table>, <tr>, and <td> tags. "
    c="Google Charts: A robust, interactive tool for various chart types."
    i="Chart.js: A popular, free JavaScript library for rendering animated, responsive charts in HTML <canvas> elements."/>
    
    <Ap/>
</>

    )
}

export default App;
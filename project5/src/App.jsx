import { useState } from "react";
import  "./App.css";

function App () { 
  return  (
    <div class="app">
      <nav class="header">
        <h1>Contact Information Form</h1>
        <p>pLease enter the information</p>
      </nav>

      
        <form class="form"> 
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" required />

          <button type="submit">Submit</button>
        </form>
      

    </div>
  )

}
export default App;
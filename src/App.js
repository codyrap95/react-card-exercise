import headerImage from "./images/illustration-hero.svg";
import "./App.css";

function App() {
  return (
    <main className="card">
      <img src={headerImage} alt="" srcset="" />
      <h1>Order Summary</h1>
      <p>
        You can now listen to millions of songs, audiobooks and podcasts on any
        device anywhere you like.
      </p>
      <div className="subcard">
        <img src="" alt="" srcset="" />
        <div className="subcard__middle"></div>
        <a href="#">Change</a>
      </div>
      <button className="btn btn--highlighted">Proceed to payment</button>
      <button className="btn">Cancel Order</button>
    </main>
  );
}

export default App;

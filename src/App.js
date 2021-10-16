import headerImage from "./images/illustration-hero.svg";
import musicNote from "./images/icon-music.svg";
import "./App.css";

function App() {
  return (
    <main className="card">
      <img src={headerImage} alt="" />
      <h1>Order Summary</h1>
      <p>
        You can now listen to millions of songs, audiobooks and podcasts on any
        device anywhere you like.
      </p>
      <div className="subcard">
        <img src={musicNote} alt="" />
        <span className="subcard__middle">
          <h2>Annual Plan</h2>
          <p>$59.99/year</p>
        </span>
        <a href="/">Change</a>
      </div>
      <button className="btn btn--highlighted">Proceed to payment</button>
      <button className="btn">Cancel Order</button>
    </main>
  );
}

export default App;

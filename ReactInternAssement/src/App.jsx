import Welcome from "./Welcome";
import "./App.css";
import Buttons from "./Buttons";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="container">
        <div className="card">
          <h1 className="mainHeading">
            Ah!!, I never saw someone from your <br></br>Company.
          </h1>
          <div className="divider"></div>
          <div className="welcome-body">
            <Welcome />
          </div>
          <Buttons />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

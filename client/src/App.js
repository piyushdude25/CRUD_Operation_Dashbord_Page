import "./App.css";

import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App flex">
      <div className="left">
        <div className="leftOption">
          <p>
            <Link to={"/create/posts"}>DataBord</Link>
          </p>
          <p>Costormar</p>
          <p>User</p>
          <p>Service</p>
          <p>Booking</p>
        </div>
      </div>
      <div className="hr"></div>
      <div className="right">
        <h1>Home page</h1>
      </div>
    </div>
  );
}

export default App;

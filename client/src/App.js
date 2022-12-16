import "./App.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App flex">
      <div className="left">
        <ul>
          <li onClick={() => navigate("create")}>DataBord</li>
          <li>Costormar</li>
          <li>User</li>
          <li>Service</li>
          <li>Booking</li>
        </ul>
      </div>
      <div className="right">
        <h1>Home page</h1>
      </div>
    </div>
  );
}

export default App;

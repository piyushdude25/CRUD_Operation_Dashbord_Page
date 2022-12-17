import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { Link } from "react-router-dom";
function CreatePost() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    pincode: "",
    position: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const createPost = (e) => {
    e.preventDefault();

    axios
      .post("/create", post)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    navigate("posts");
  };

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
        <h1>Add User</h1>
        <Form className="formBox">
          <Form.Group className="formGroups">
            <div className="formInput">
              <p>Name</p>
              <Form.Control
                name="name"
                value={post.name}
                onChange={handleChange}
                style={{ marginBottom: "1rem" }}
                placeholder="name"
              />
            </div>
            <div className="formInput">
              <p>Email</p>
              <Form.Control
                onChange={handleChange}
                name="email"
                value={post.email}
                style={{ marginBottom: "1rem" }}
                placeholder="email"
              />
            </div>

            <div className="formInput">
              <p>Mobile</p>
              <Form.Control
                onChange={handleChange}
                name="mobile"
                value={post.mobile}
                style={{ marginBottom: "1rem" }}
                placeholder="mobile"
              />
            </div>

            <div className="formInput">
              <p>Address</p>
              <Form.Control
                onChange={handleChange}
                name="address"
                value={post.address}
                style={{ marginBottom: "1rem" }}
                placeholder="address"
              />
            </div>

            <div className="formInput">
              <p>Pincode</p>
              <Form.Control
                onChange={handleChange}
                name="pincode"
                value={post.pincode}
                style={{ marginBottom: "1rem" }}
                placeholder="pincode"
              />
            </div>

            <div className="formInput">
              <p>Position</p>
              <Form.Control
                onChange={handleChange}
                name="position"
                value={post.position}
                style={{ marginBottom: "1rem" }}
                placeholder="position"
              />
            </div>
          </Form.Group>
        </Form>

        <Button
          onClick={createPost}
          variant="outline-success"
          style={{ width: "100%", marginBottom: "1rem" }}
        >
          Add user
        </Button>

        <Button
          onClick={() => navigate("posts")}
          variant="outline-success"
          style={{ width: "100%", marginBottom: "1rem" }}
        >
          ALL User
        </Button>

        <Button
          variant="outline-dark"
          style={{ width: "100%", marginBottom: "1rem" }}
          onClick={() => navigate(-1)}
        >
          BACK
        </Button>
      </div>
    </div>
  );
}

export default CreatePost;

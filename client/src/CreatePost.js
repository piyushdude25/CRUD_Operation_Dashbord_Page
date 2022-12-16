import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    <div style={{ textAlign: "center", width: "90%", margin: "auto auto" }}>
      <h1>Add User</h1>
      <Form>
        <Form.Group>
          <p>Name</p>
          <Form.Control
            name="name"
            value={post.name}
            onChange={handleChange}
            style={{ marginBottom: "1rem" }}
            placeholder="name"
          />

          <p>Email</p>
          <Form.Control
            onChange={handleChange}
            name="email"
            value={post.email}
            style={{ marginBottom: "1rem" }}
            placeholder="email"
          />

          <p>Mobile</p>
          <Form.Control
            onChange={handleChange}
            name="mobile"
            value={post.mobile}
            style={{ marginBottom: "1rem" }}
            placeholder="mobile"
          />

          <p>Address</p>
          <Form.Control
            onChange={handleChange}
            name="address"
            value={post.address}
            style={{ marginBottom: "1rem" }}
            placeholder="address"
          />
          <p>Pincode</p>
          <Form.Control
            onChange={handleChange}
            name="pincode"
            value={post.pincode}
            style={{ marginBottom: "1rem" }}
            placeholder="pincode"
          />

          <p>Position</p>
          <Form.Control
            onChange={handleChange}
            name="position"
            value={post.position}
            style={{ marginBottom: "1rem" }}
            placeholder="position"
          />

          {/* <p></p>
          <Form.Control
            onChange={handleChange}
            name=""
            value={post.}
            style={{ marginBottom: "1rem" }}
            placeholder=""
          /> */}
        </Form.Group>
        <Button
          onClick={createPost}
          variant="outline-success"
          style={{ width: "100%", marginBottom: "1rem" }}
        >
          Add user
        </Button>
      </Form>
      <Button
        onClick={() => navigate("posts")}
        variant="outline-success"
        style={{ width: "100%" }}
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
  );
}

export default CreatePost;

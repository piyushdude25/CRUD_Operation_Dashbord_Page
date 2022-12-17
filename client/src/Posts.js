import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
function Posts() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [updatedPost, setUpdatedPost] = useState({
    id: "",
    name: "",
    email: "",
    mobile: "",
    address: "",
    pincode: "",
    position: "",
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios
      .get("/posts")
      .then((res) => {
        console.log("res", res);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deletePost = (id) => {
    console.log(id);

    axios
      .delete(`/delete/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    window.location.reload();
  };

  const updatePost = (id, name, email, mobile, address, pincode, position) => {
    setUpdatedPost((prev) => {
      return {
        ...prev,
        id,
        name,
        email,
        mobile,
        address,
        pincode,
        position,
      };
    });
    handleShow();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const saveUpdatedPost = () => {
    console.log(updatedPost);

    axios
      .put(`/update/${updatedPost.id}`, updatedPost)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    handleClose();
    window.location.reload();
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
        <div>
          <h1>Manage User</h1>
          <span>
            <Link to={"/create"}>Add User</Link>
          </span>
        </div>
        <Button
          variant="outline-dark"
          style={{ width: "100%", marginBottom: "1rem" }}
          onClick={() => navigate(-1)}
        >
          BACK
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update a User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              placeholder="name"
              name="name"
              value={updatedPost.name ? updatedPost.name : ""}
              style={{ marginBottom: "1rem" }}
              onChange={handleChange}
            />
            <Form.Control
              placeholder="email"
              name="email"
              onChange={handleChange}
              value={updatedPost.email ? updatedPost.email : ""}
            />
            <Form.Control
              placeholder="mobile"
              name="mobile"
              onChange={handleChange}
              value={updatedPost.mobile ? updatedPost.mobile : ""}
            />
            <Form.Control
              placeholder="address"
              name="address"
              onChange={handleChange}
              value={updatedPost.address ? updatedPost.address : ""}
            />
            <Form.Control
              placeholder="pincode"
              name="pincode"
              onChange={handleChange}
              value={updatedPost.pincode ? updatedPost.pincode : ""}
            />
            <Form.Control
              placeholder="position"
              name="position"
              onChange={handleChange}
              value={updatedPost.position ? updatedPost.position : ""}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={saveUpdatedPost}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        {posts ? (
          <>
            {posts.map((post) => {
              return (
                <div className="postBox" key={post._id}>
                  <div className="userDetails">
                    <h4>{post.name}</h4>
                    <p>{post.email}</p>
                    <p>{post.mobile}</p>
                    <p>{post.address}</p>
                    <p>{post.pincode}</p>
                    <p>{post.position}</p>
                  </div>
                  <div>
                    <Button
                      variant="outline-info"
                      onClick={() =>
                        updatePost(
                          post._id,
                          post.name,
                          post.email,
                          post.mobile,
                          post.address,
                          post.pincode,
                          post.position
                        )
                      }
                    >
                      UPDATE
                    </Button>
                    <Button
                      onClick={() => deletePost(post._id)}
                      variant="outline-danger"
                    >
                      DELETE
                    </Button>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          "No Data"
        )}
      </div>
    </div>
  );
}

export default Posts;

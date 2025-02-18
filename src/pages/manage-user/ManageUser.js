import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Col,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Row,
} from "reactstrap";
import "./ManageUser.css";

const ManageUser = (props) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [data, setdata] = useState([]);

  const {
    handleSubmit,
    reset,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const watchAllfields = watch();
  useEffect(() => {
    getUserList();
  }, []);
  const getUserList = async () => {
    const baseURL = "http://localhost:8080/";
    axios
      .get(`${baseURL}users/list`, {})
      .then((response) => {
        setdata(response.data);
      })
      .catch((error) => {
        console.error("There was an error adding the user!", error);
      });
  };
  const onSave = (data) => {
    const baseURL = "http://localhost:8080/";
    axios
      .post(`${baseURL}users`, data)
      .then((response) => {
        if (data.id) {
          console.log("User update successfully", response);
        } else {
          console.log("User added successfully", response);
        }
        setIsOpen(false);
        reset({});
        getUserList();
        // navigate("/manage-user"); // Navigate to user list or any other page
      })
      .catch((error) => {
        console.error("There was an error adding the user!", error);
      });
  };
  const deleteUser = (id) => {
    const baseURL = "http://localhost:8080/";
    axios
      .delete(`${baseURL}users/${id}`)
      .then((response) => {
        console.log("User deleted successfully", response);
        getUserList();
        // navigate("/manage-user"); // Navigate to user list or any other page
      })
      .catch((error) => {
        console.error("There was an error adding the user!", error);
      });
  };
  const openUserPopUpForUpdate = (id) => {
    const baseURL = "http://localhost:8080/";
    axios
      .get(`${baseURL}users/${id}`)
      .then((response) => {
        setIsOpen(true);
        reset(response.data);
      })
      .catch((error) => {
        console.error("There was an error adding the user!", error);
      });
  };

  return (
    <div>
      <div className="header-class header-shadow">
        <div style={{ fontWeight: "bold", fontSize: "25px" }} className="m-1">
          <span>MANAGE USER</span>
        </div>
        <div className="user-shadow">
          <div className="filter-header">
            <Col lg={12}>
              <Row>
                <Col lg={3}>
                  <div className="form-group">
                    <input
                      type="text"
                      id="search"
                      placeholder="Search User"
                      className="form-control"
                    />
                  </div>
                </Col>
                <Col lg={2}>
                  <button type="submit" className="btn btn-primary">
                    Search
                  </button>
                </Col>
                <Col lg={7} style={{ textAlign: "right" }}>
                  <button
                    onClick={() => {
                      setIsOpen(true);
                      reset({});
                    }}
                    className="btn btn-primary"
                  >
                    Add User
                  </button>
                </Col>
              </Row>
            </Col>
          </div>

          <div className="user-table m-3">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((item, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>
                          {item.first_name} {item.last_name}
                        </td>
                        <td>{item.email}</td>
                        <td>Admin</td>
                        <td>
                          <button
                            onClick={() => openUserPopUpForUpdate(item.id)}
                            className="btn btn-warning"
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => deleteUser(item.id)}
                            style={{ marginLeft: "10px" }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}

                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Offcanvas
        direction="end"
        toggle={function noRefCheck() {}}
        isOpen={isOpen}
      >
        <OffcanvasHeader
          toggle={function noRefCheck() {}}
          onClick={() => {
            reset({});
            setIsOpen(false);
          }}
        >
          {watchAllfields.id ? "Update" : "Add"} User
        </OffcanvasHeader>
        <OffcanvasBody>
          <strong>
            <form onSubmit={handleSubmit(onSave)}>
              <div className="input-group">
                <input
                  type="text"
                  autoComplete="off"
                  placeholder="First Name"
                  {...register("first_name", {
                    required: true,
                  })}
                />
                <div>
                  {errors.first_name && (
                    <span className="text-danger fs-12">
                      Please Enter First Name.
                    </span>
                  )}
                </div>
              </div>

              <div className="input-group">
                <input
                  type="text"
                  autoComplete="off"
                  placeholder="Last Name"
                  {...register("last_name", {
                    required: true,
                  })}
                />
                <div>
                  {errors.last_name && (
                    <span className="text-danger fs-12">
                      Please Enter last Name.
                    </span>
                  )}
                </div>
              </div>
              <div className="input-group">
                <input
                  type="text"
                  autoComplete="off"
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                    pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                  })}
                />
                <div>
                  {errors.email && (
                    <span className="text-danger fs-12">
                      {errors.email.type == "pattern"
                        ? "Please Enter Valid Email"
                        : "Please Enter Email"}
                    </span>
                  )}
                </div>
              </div>
              <div className="input-group">
                <input
                  type="text"
                  autoComplete="off"
                  placeholder="Mobile Number"
                  {...register("mobile", {
                    required: true,
                  })}
                />
                <div>
                  {errors.mobile && (
                    <span className="text-danger fs-12">
                      Please Enter Mobile.
                    </span>
                  )}
                </div>
              </div>
              <div>
                <select
                  className="select-control"
                  {...register("role_id", {
                    required: true,
                  })}
                >
                  <option value="">Select Role</option>
                  <option value="1">Admin</option>
                  <option value="2">User</option>
                  <option value="3">Manager</option>
                </select>
                <div>
                  {errors.role_id && (
                    <span className="text-danger fs-12">
                      Please Select Role.
                    </span>
                  )}
                </div>
              </div>
              <hr />
              <button type="submit" className="login-btn">
                Submit
              </button>
            </form>
          </strong>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
};

export default ManageUser;

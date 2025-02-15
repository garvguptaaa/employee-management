import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom"; import {
  Col, Offcanvas, OffcanvasBody, OffcanvasHeader, Row
} from "reactstrap";
import "./ManageUser.css";

const ManageUser = (props) => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [isOpen, setIsOpen] = useState(false);
  const handleLogin = (data) => {
    console.log('data', data)
  };

  return (
    <div className="user-container">
      <div className="header-class header-shadow">
        <div style={{ fontWeight: 'bold', fontSize: '25px' }} className="m-1">
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
                      {...register("search", { required: false })}
                    />
                  </div>
                </Col>
                <Col lg={2}>
                  <button type="submit" className="btn btn-primary">
                    Search
                  </button>
                </Col>
                <Col lg={7} style={{ textAlign: 'right' }}>
                  <button onClick={() => setIsOpen(true)} className="btn btn-primary">
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
                <tr>
                  <td>1</td>
                  <td>John Doe</td>
                  <td>john.doe@example.com</td>
                  <td>Admin</td>
                  <td>
                    <button className="btn btn-warning">Edit</button>
                    <button className="btn btn-danger" style={{ marginLeft: '10px' }}>Delete</button>
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>


      <Offcanvas toggle={function noRefCheck() { }} isOpen={isOpen}>
        <OffcanvasHeader toggle={function noRefCheck() { }} onClick={() => setIsOpen(false)}>
          Add user
        </OffcanvasHeader>
        <OffcanvasBody>
          <strong>
            <form onSubmit={handleSubmit(handleLogin)}>
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
                    <span className="text-danger fs-12">Please Enter First Name.</span>
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
                    <span className="text-danger fs-12">Please Enter last Name.</span>
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
                    <span className="text-danger fs-12">{errors.email.type == 'pattern' ? 'Please Enter Valid Email' : 'Please Enter Email'}</span>
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
                    <span className="text-danger fs-12">Please Enter Mobile.</span>
                  )}
                </div>
              </div>
              <div >
                <select
                  className="select-control"
                  {...register("role_id", {
                    required: true,
                  })}
                >
                  <option value="">Select Role</option>
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                  <option value="Manager">Manager</option>
                </select>
                <div>
                  {errors.role_id && (
                    <span className="text-danger fs-12">Please Select Role.</span>
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

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  Col, Offcanvas, OffcanvasBody, OffcanvasHeader, Row
} from "reactstrap";
import "./ManageRole.css";

const AddEditRole = (props) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    localStorage.setItem('UserData', JSON.stringify(data));
    props.onLogin()
    navigate("/home");
  };

  return (
    <div className="user-container">
      <div className="header-class header-shadow">
        <div style={{ fontWeight: 'bold', fontSize: '25px' }} className="m-1">
          <span>MANAGE ROLES</span>
        </div>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="user-shadow">
            <div className="filter-header">
              <Col lg={12}>
                <Row>
                  <Col lg={3}>
                    <div className="input-group">
                      <input
                        type="text"
                        autoComplete="off"
                        placeholder="Role Name"
                        {...register("name", {
                          required: true,
                        })}
                      />
                      <div>
                        {errors.name && (
                          <span className="text-danger fs-12">Please Enter Role Name.</span>
                        )}
                      </div>
                    </div>
                  </Col>
                  <Col lg={7} style={{ textAlign: 'right' }}>

                  </Col>
                </Row>
              </Col>
            </div>

            <div className="user-table m-3">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Menu</th>
                    <th>Is View</th>
                    <th>is Add</th>
                    <th>is Edit</th>
                    <th>is Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Manage User</td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                  </tr>
                  <tr>
                    <td>Manage Role</td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
              <button onClick={() => navigate('/add-role')} className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div >
  );
};

export default AddEditRole;

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  Col, Row
} from "reactstrap";
import "./ManageRole.css";

const ManageRole = (props) => {
  const navigate = useNavigate();
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
        <div className="user-shadow">
          <div className="filter-header">
            <Col lg={12}>
              <Row>
                <Col lg={3}>
                  <div className="form-group">
                    <input
                      type="text"
                      id="search"
                      placeholder="Search Role"
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
                  <button onClick={() => navigate('/add-role')} className="btn btn-primary">
                    Add Role
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
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>ALL PERMISSION</td>
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
    </div>
  );
};

export default ManageRole;

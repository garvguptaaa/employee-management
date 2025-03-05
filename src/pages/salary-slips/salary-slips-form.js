import { GetApi } from "../../services/ApiService";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./salary-slips.css";
import SalarySlips from "./salary-slips";
import { Col, Row } from "reactstrap";


function SalarySlipsForm() {
  const {
    handleSubmit,
    reset,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [userList, setUserList] = useState([]);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = () => {
    GetApi("/users", {}).then((response) => {
      setUserList(response);
    }).catch((error) => {
      toast.error("Something Went Wrong");
    });
  }

  const onSave = (data) => {
    setIsOpen(true);
  }
  return (
    <>
      <div>
        <div className="header-class header-shadow">
          <div className="user-shadow">
            <div style={{ fontWeight: "bold", fontSize: "25px" }} className="m-1">
              <span>Make Salary Slip</span>
            </div>
            <form onSubmit={handleSubmit(onSave)} style={{ padding: "30px" }}>
              <Row><Col lg={3}>
                <div className="input-group">
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="First Name"
                    {...register("first_name", {
                      required: false,
                    })}
                  />
                  <div>
                    {errors.first_name && (
                      <span className="text-danger fs-12">
                        Please Enter First Name.
                      </span>
                    )}
                  </div>
                </div></Col>
                <Col lg={3}>
                  <div className="input-group">
                    <input
                      type="text"
                      autoComplete="off"
                      placeholder="Last Name"
                      {...register("last_name", {
                        required: false,
                      })}
                    />
                    <div>
                      {errors.last_name && (
                        <span className="text-danger fs-12">
                          Please Enter last Name.
                        </span>
                      )}
                    </div>
                  </div></Col>
                <Col lg={3}>  <div className="input-group">
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="Email"
                    {...register("email", {
                      required: false,
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
                </div></Col>
                <Col lg={3}>  <div className="input-group">
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="Mobile Number"
                    {...register("mobile", {
                      required: false,
                    })}
                  />
                  <div>
                    {errors.mobile && (
                      <span className="text-danger fs-12">
                        Please Enter Mobile.
                      </span>
                    )}
                  </div>
                </div></Col>
                <Col lg={3}>   <div className="input-group">
                  <textarea
                    className="input-group"
                    autoComplete="off"
                    placeholder="Address"
                    {...register("address", {
                      required: false,
                    })}
                  />
                  <div>
                    {errors.mobile && (
                      <span className="text-danger fs-12">
                        Please Enter Address.
                      </span>
                    )}
                  </div>
                </div></Col>
                <Col lg={3}>    <div className="input-group">
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="Designation"
                    {...register("position", {
                      required: false,
                    })}
                  />
                  <div>
                    {errors.mobile && (
                      <span className="text-danger fs-12">
                        Please Enter Designation.
                      </span>
                    )}
                  </div>
                </div></Col>
                <Col lg={3}>  <div>
                  <select
                    className="select-control"
                    {...register("role_id", {
                      required: false,
                    })}
                  >
                    <option value="">Select Role</option>
                    {userList &&
                      userList.map((item, index) => {
                        return (
                          <option key={index} value={item.id}>
                            {item.first_name} {item.last_name}
                          </option>
                        );
                      }

                      )}
                  </select>
                  <div>
                    {errors.role_id && (
                      <span className="text-danger fs-12">
                        Please Select Role.
                      </span>
                    )}
                  </div>
                </div></Col ></Row>
              <hr />
              <div style={{ justifyContent: "center", display: "flex" }}>
                <Col lg={1}>
                  <button type="submit" className="login-btn">
                    Submit
                  </button></Col>
              </div>
            </form>
          </div>
        </div>
      </div>
      {
        isOpen &&
        <SalarySlips
          showModel={isOpen}
        />
      }
    </>
  )
}
export default SalarySlipsForm;

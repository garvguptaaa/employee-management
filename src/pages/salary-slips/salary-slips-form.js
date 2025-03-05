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
              <Row>
                <Col lg={3}>
                  <div className="input-group">
                    <label className="font-bold">Salary</label>
                    <input
                      type="text"
                      autoComplete="off"
                      placeholder="Salary"
                      {...register("salary", {
                        required: false,
                        pattern: /^[0-9]*\.?[0-9]*$/,
                      })}
                    />
                    <div>
                      {errors.salary && (
                        <span className="text-danger fs-12">
                          {errors.salary.type == "pattern"
                            ? "Please Enter Valid Salary"
                            : "Please Enter Salary"}
                        </span>
                      )}
                    </div>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="input-group">
                    <label className="font-bold">HRA</label>
                    <input
                      type="text"
                      autoComplete="off"
                      placeholder="HRA"
                      {...register("hra", {
                        required: false,
                        pattern: /^[0-9]*$/,
                      })}
                    />
                    <div>
                      {errors.hra && (
                        <span className="text-danger fs-12">
                          {errors.hra.type == "pattern"
                            ? "Please Enter Valid HRA"
                            : "Please Enter HRA"}
                        </span>
                      )}
                    </div>
                  </div>
                </Col>
              </Row>
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

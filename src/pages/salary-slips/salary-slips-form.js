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
  const [data, setData] = useState({});

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
    var obj = {};
    if (data.user_id) {
      for (var i in userList) {
        if (userList[i].id == data.user_id) {
          obj = userList[i]
        }
      }
    }
    // PAYOUT
    var salaryMonth = parseFloat(data.salary) / 12;
    var salaryDay = parseFloat(salaryMonth) / parseFloat(data.total_day);
    var wholeMonthSalary = parseFloat(salaryDay) * parseFloat(data.total_day_present);

    obj.total_day = data.total_day
    obj.total_day_present = data.total_day_present
    obj.basic_salary = (wholeMonthSalary * parseFloat(data.basic_salary)) / 100 ?? 0;
    obj.hra = (wholeMonthSalary * parseFloat(data.hra) / 100) ?? 0;
    obj.medical_allowance = (wholeMonthSalary * parseFloat(data.medical_allowance)) / 100 ?? 0;
    obj.statuory_bonus = (wholeMonthSalary * parseFloat(data.statuory_bonus)) / 100 ?? 0;
    obj.special_allowance = (wholeMonthSalary * parseFloat(data.special_allowance)) / 100 ?? 0;

    obj.total_earning = obj.basic_salary + obj.hra + obj.medical_allowance + obj.statuory_bonus + obj.special_allowance;

    // DEDCTIONS
    obj.pf = data.pf ? parseFloat(data.pf) : 0;
    obj.professional_tax_deduction = data.professional_tax_deduction ? parseFloat(data.professional_tax_deduction) : 0;
    obj.total_deduction = obj.pf + obj.professional_tax_deduction;
    obj.net_salary = obj.total_earning - obj.total_deduction;
    setData(obj)
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
                    <label className="font-bold">Select Employee</label>
                    <select
                      className="select-control"
                      {...register("user_id", {
                        required: true,
                      })}
                    >
                      <option value="">Select Employee</option>
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
                          Please Select Employee.
                        </span>
                      )}
                    </div>
                  </div>
                </Col>
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
                    <label className="font-bold">House Rent Allowance %</label>
                    <input
                      type="text"
                      autoComplete="off"
                      placeholder="House Rent Allowance"
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
                <Col lg={3}>
                  <div className="input-group">
                    <label className="font-bold">Statuory Bonus %</label>
                    <input
                      type="text"
                      autoComplete="off"
                      placeholder="Statuory Bonus"
                      {...register("statuory_bonus", {
                        required: false,
                        pattern: /^[0-9]*$/,
                      })}
                    />
                    <div>
                      {errors.statuory_bonus && (
                        <span className="text-danger fs-12">
                          {errors.statuory_bonus.type == "pattern"
                            ? "Please Enter Valid Statuory Bonus"
                            : "Please Enter Statuory Bonus"}
                        </span>
                      )}
                    </div>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="input-group">
                    <label className="font-bold">Special Allowance %</label>
                    <input
                      type="text"
                      autoComplete="off"
                      placeholder="Special Allowance"
                      {...register("special_allowance", {
                        required: false,
                        pattern: /^[0-9]*$/,
                      })}
                    />
                    <div>
                      {errors.special_allowance && (
                        <span className="text-danger fs-12">
                          {errors.special_allowance.type == "pattern"
                            ? "Please Enter Valid Special Allowance"
                            : "Please Enter Special Allowance"}
                        </span>
                      )}
                    </div>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="input-group">
                    <label className="font-bold">Medical Allowance %</label>
                    <input
                      type="text"
                      autoComplete="off"
                      placeholder="Medical Allowance"
                      {...register("medical_allowance", {
                        required: false,
                        pattern: /^[0-9]*$/,
                      })}
                    />
                    <div>
                      {errors.medical_allowance && (
                        <span className="text-danger fs-12">
                          {errors.medical_allowance.type == "pattern"
                            ? "Please Enter Valid Medical Allowance"
                            : "Please Enter Medical Allowance"}
                        </span>
                      )}
                    </div>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="input-group">
                    <label className="font-bold">Basic Salary %</label>
                    <input
                      type="text"
                      autoComplete="off"
                      placeholder="Basic Salary"
                      {...register("basic_salary", {
                        required: false,
                        pattern: /^[0-9]*$/,
                      })}
                    />
                    <div>
                      {errors.basic_salary && (
                        <span className="text-danger fs-12">
                          {errors.basic_salary.type == "pattern"
                            ? "Please Enter Valid Basic Salary"
                            : "Please Enter Basic Salary"}
                        </span>
                      )}
                    </div>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="input-group">
                    <label className="font-bold">Statutory Provident Fund</label>
                    <input
                      type="text"
                      autoComplete="off"
                      placeholder="Statutory Provident Fund"
                      {...register("pf", {
                        required: false,
                        pattern: /^[0-9]*$/,
                      })}
                    />
                    <div>
                      {errors.pf && (
                        <span className="text-danger fs-12">
                          {errors.pf.type == "pattern"
                            ? "Please Enter Valid PF"
                            : "Please Enter PF"}
                        </span>
                      )}
                    </div>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="input-group">
                    <label className="font-bold">Professional Tax Deduction</label>
                    <input
                      type="text"
                      autoComplete="off"
                      placeholder="Professional Tax Deduction"
                      {...register("professional_tax_deduction", {
                        required: false,
                        pattern: /^[0-9]*$/,
                      })}
                    />
                    <div>
                      {errors.professional_tax_deduction && (
                        <span className="text-danger fs-12">
                          {errors.professional_tax_deduction.type == "pattern"
                            ? "Please Enter Valid Professional Tax Deduction"
                            : "Please Enter Professional Tax Deduction"}
                        </span>
                      )}
                    </div>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="input-group">
                    <label className="font-bold">Total Day</label>
                    <input
                      type="text"
                      autoComplete="off"
                      placeholder="Total Day"
                      {...register("total_day", {
                        required: false,
                        pattern: /^[0-9]*$/,
                      })}
                    />
                    <div>
                      {errors.total_day && (
                        <span className="text-danger fs-12">
                          {errors.total_day.type == "pattern"
                            ? "Please Enter Valid Total Day"
                            : "Please Enter Total Day"}
                        </span>
                      )}
                    </div>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="input-group">
                    <label className="font-bold">Total Day Present</label>
                    <input
                      type="text"
                      autoComplete="off"
                      placeholder="Total Day Present"
                      {...register("total_day_present", {
                        required: false,
                        pattern: /^[0-9]*$/,
                      })}
                    />
                    <div>
                      {errors.total_day_present && (
                        <span className="text-danger fs-12">
                          {errors.total_day_present.type == "pattern"
                            ? "Please Enter Valid Total Day Present"
                            : "Please Enter Total Day Present"}
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
          ModelData={data}
        />
      }
    </>
  )
}
export default SalarySlipsForm;

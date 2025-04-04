import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  Col, Row
} from "reactstrap";
import "./home.css";
import { useEffect, useState } from "react";
import { DeleteApi, GetApi } from "../../services/ApiService";
import { toast } from "react-toastify";
import './home.css';
import dashboard from "../../assets/dashboard.png";

const Home = (props) => {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();


  useEffect(() => {
    getroleList();
  }, []);
  const getroleList = () => {
    GetApi("/roles/all/list", {}).then((response) => {
      setdata(response);
    }).catch((error) => {
      toast.error("Something Went Wrong");
    });
  };
  const deleteRole = (id) => {
    DeleteApi("/roles/delete/" + id, data).then((response) => {
      toast.success("User deleted successfully");
      getroleList();
    }).catch((error) => {
      toast.error("Something Went Wrong");
    });
  };
  return (
    <div>
      {/* <div className="header-class header-shadow P-4"> */}
        {/* <div style={{ height: '90vh', overflowY: 'scroll', padding: '20px' }}> */}
          {/* <Row>
            <Col lg={3}>
              <div>
                <div className="p-3" style={{ backgroundColor: '#64c3d1', borderRadius: '10px', marginLeft: '10px', color: 'white' }}>
                  <div style={{ width: '100%' }}>
                    <div style={{width:'100%'}}>
                      <div className="d-flex">
                        <p className="" title="Time Today">
                          Time Today
                        </p>
                        <span> - Apr 03, 2025 Thu</span>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex align-items-center w-100 justify-content-between">
                        <div>
                          <p className="">CURRENT TIME</p>
                          <h1>
                            11:44
                            <span>:00</span>
                            <span>am</span>
                          </h1>
                        </div>
                        <div >
                          <div>
                            <div>
                              <button className="btn btn-danger btn-x-sm">Clock-out</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ng-star-inserted"></div>
                  </div>
                </div>
                <div>
                  
                </div>
              </div>
            </Col>
            <Col lg={9}>

            </Col>
          </Row> */}
          {/* dashboard.png */}
     
        {/* </div> */}
      {/* </div> */}
      <img src={dashboard} alt="Profile" style={{ width: '90vw', height: '90vh' }} />
    </div>
  );
};

export default Home;

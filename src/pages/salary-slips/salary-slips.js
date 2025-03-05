import React, { useEffect, useRef, useState } from 'react'
import "./salary-slips.css";
import { useReactToPrint } from "react-to-print";
import {
  Col,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Row,
} from "reactstrap";
import HelperService from '../../services/HelperService';

function SalarySlips(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setdata] = useState('');
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  useEffect(() => {
    setIsOpen(props?.showModel);
    console.log('props?.ModelData', props?.ModelData)
    setdata(props?.ModelData);
  }, []);
  return (
    <>
      <Offcanvas
        direction="end"
        toggle={function noRefCheck() { }}
        isOpen={isOpen}
        style={{ width: '90%' }}
      >
        <OffcanvasHeader
          toggle={function noRefCheck() { }}
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Salary Slip
        </OffcanvasHeader>
        <OffcanvasBody>
          <strong>
            <div className="salary-slip" ref={contentRef}>
              <table className="empDetail">
                <div className='new'>
                  <h3 className='newcenter'>Salary Slip</h3>
                </div>
                <tr style={{ height: '70px' }}>
                  <th>Name</th>
                  <td>{data?.first_name} {data?.last_name}</td>
                  <th>Employee Code</th>
                  <td>{data?.id}</td>
                  <th>Mobile</th>
                  <td>{data?.mobile}</td>
                 
                </tr>
                <tr className="myBackground" style={{ height: '70px' }}>
                  <th>Email</th>
                  <td>{data?.email}</td>
                  <th>Month Days</th>
                  <td>{data?.total_day}</td>
                  <th>Days Present</th>
                  <td>{data?.total_day_present}</td>
                </tr>
                <tr className="myBackground" >
                  <th colspan="2">Payments</th>
                  <th>Particular</th>
                  <th className="table-border-right">Amount (Rs.)</th>
                  <th colspan="2">Deductions</th>
                  <th>Particular</th>
                  <th>Amount (Rs.)</th>
                </tr>
                <tr>
                  <th colspan="2">Statuory Bonus</th>
                  <td></td>
                  <td className="myAlign">{parseInt(data?.statuory_bonus)?.toFixed(2)}</td>
                  <th colspan="2">Provident Fund</th>
                  <td></td>
                  <td className="myAlign">{parseInt(data?.pf)?.toFixed(2) ?? 0}</td>
                </tr>
                <tr>
                  <th colspan="2">Special Allowance</th>
                  <td></td>
                  <td className="myAlign">{parseInt(data?.special_allowance)?.toFixed(2)}</td>
                  <th colspan="2">Professional Tax</th>
                  <td></td>
                  <td className="myAlign">{parseInt(data?.professional_tax_deduction)?.toFixed(2)}</td>
                </tr>
                <tr>
                  <th colspan="2">House Rent Allowance</th>
                  <td></td>
                  <td className="myAlign">{parseInt(data?.hra)?.toFixed(2)}</td>
                </tr>
                <tr>
                  <th colspan="2">Medical Allowance</th>
                  <td></td>
                  <td className="myAlign">{parseInt(data?.medical_allowance)?.toFixed(2)}</td>
                </tr>
                <tr>
                  <th colspan="2">Basic Salary</th>
                  <td></td>
                  <td className="myAlign">{parseInt(data?.basic_salary)?.toFixed(2)}</td>
                </tr>
                <tr className="myBackground">
                  <th colspan="3">Total Payments</th>
                  <td className="myAlign">{parseInt(data?.total_earning)?.toFixed(2)}</td>
                  <th colspan="3">Total Deductions</th>
                  <td className="myAlign">{parseInt(data?.total_deduction)?.toFixed(2)}</td>
                </tr>
                <tr height="40px">
                  <th colspan="2"></th>
                  <th></th>
                  <td className="table-border-right"></td>
                  <th colspan="2" className="table-border-bottom">Net Salary</th>
                  <td></td>
                  <td>{parseInt(data?.net_salary)?.toFixed(2)}</td>
                </tr>

                <tr className="myBackground">
                  <th colspan="7">RUPEES : {HelperService.getAmountInWord(data?.net_salary)}</th>
                </tr>
                <div className='new'  >
                  <h3 className='newcenter' style={{ fontSize: '16px' }}>This is computer generated salary slip. Hence no signature is required</h3>
                </div>
              </table>
            </div>
            <hr />
          <div style={{justifyContent: 'center', display: 'flex'}}>
              <Col lg={2}>
                <button onClick={() => reactToPrintFn()} className="login-btn">
                  Print
                </button>
              </Col>
          </div>
          </strong>
        </OffcanvasBody>
      </Offcanvas>

    </>
  )
}

export default SalarySlips

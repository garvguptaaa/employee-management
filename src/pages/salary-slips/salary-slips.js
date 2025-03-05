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

function SalarySlips(props) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  useEffect(() => {
    setIsOpen(props?.showModel);
  }, []);
  return (
    <>
      <Offcanvas
        direction="end"
        toggle={function noRefCheck() { }}
        isOpen={isOpen}
        style={{ width: '80%' }}
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
                <tr>
                  <th>Name</th>
                  <td>Example</td>
                  <th>Employee Code</th>
                  <td>XXXXXXXXXXX</td>
                  <th>Mobile</th>
                  <td>XXXXXXXXXXX</td>
                  <th>Email</th>
                  <td>XXXXXXXXXXX</td>
                </tr>
                <tr className="myBackground">
                  <th>Month Days</th>
                  <td>31</td>
                  <th>Days Present</th>
                  <td>28</td>
                  <th>LWP/Absent</th>
                  <td>0</td>
                  <th>Privilege Leave</th>
                  <td>2</td>
                </tr>
                <tr className="myBackground">
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
                  <td className="myAlign">4935.00</td>
                  <th colspan="2">Provident Fund</th>
                  <td></td>
                  <td className="myAlign">00.00</td>
                </tr>
                <tr>
                  <th colspan="2">Special Allowance</th>
                  <td></td>
                  <td className="myAlign">00.00</td>
                  <th colspan="2">Professional Tax</th>
                  <td></td>
                  <td className="myAlign">00.00</td>
                </tr>
                <tr>
                  <th colspan="2">House Rent Allowance</th>
                  <td></td>
                  <td className="myAlign">00.00</td>
                  <th colspan="2">Loan</th>
                  <td></td>
                  <td className="myAlign">00.00</td>
                </tr>
                <tr>
                  <th colspan="2">Medical Allowance</th>
                  <td></td>
                  <td className="myAlign">00.00</td>
                  <th colspan="2">Income Tax</th>
                  <td></td>
                  <td className="myAlign">00.00</td>
                </tr>
                <tr>
                  <th colspan="2">Basic Salary</th>
                  <td></td>
                  <td className="myAlign">00.00</td>
                </tr>
                <tr className="myBackground">
                  <th colspan="3">Total Payments</th>
                  <td className="myAlign">10000</td>
                  <th colspan="3">Total Deductions</th>
                  <td className="myAlign">1000</td>
                </tr>
                <tr height="40px">
                  <th colspan="2"></th>
                  <th></th>
                  <td className="table-border-right"></td>
                  <th colspan="2" className="table-border-bottom">Net Salary</th>
                  <td></td>
                  <td>52690.00</td>
                </tr>

                <tr className="myBackground">
                  <th colspan="7">RUPEES : FIFTY THOUSAND SIX HUNDRED NINETY ONLY</th>
                </tr>
                <div className='new'  >
                  <h3 className='newcenter' style={{ fontSize: '16px' }}>This is computer generated salary slip. Hence no signature is required</h3>
                </div>
              </table>
            </div>
            <hr />
            <button onClick={() => reactToPrintFn()} className="login-btn">
              Print
            </button>
          </strong>
        </OffcanvasBody>
      </Offcanvas>

    </>
  )
}

export default SalarySlips

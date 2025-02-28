import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  Col,
  Row
} from "reactstrap";
import "./ManageRole.css";
import { GetApi, PostApi } from "../../services/ApiService";
import { toast } from "react-toastify";

const AddEditRole = (props) => {
  const List = [
    {
      menu: 'Dashboard',
      menu_code: 'dashboard',
      is_view: false,
      is_add: null,
      is_edit: null,
      is_delete: null
    },
    {
      menu: 'Manage User',
      menu_code: 'manage-user',
      is_view: false,
      is_add: true,
      is_edit: false,
      is_delete: false
    },
    {
      menu: 'Manage Role',
      menu_code: 'manage-role',
      is_view: false,
      is_add: false,
      is_edit: false,
      is_delete: true
    },

  ];
  let { id } = useParams();
  const navigate = useNavigate();
  const [MenuList, setMenuList] = useState(List);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (id) {
      getRoleDetail();
    }
  }, []);
  const getRoleDetail = () => {
    GetApi("/roles/" + id, {}).then((response) => {
      reset(response);
      if (response.role_access && response.role_access.length > 0) {
        setMenuList(response.role_access);
      }
    }).catch((error) => {
      toast.error("Something Went Wrong");
    });
  };
  const onSave = (data) => {
    var obj = {
      id: id ?? null,
      name: data.name,
      role_access: MenuList
    }
    PostApi("/roles", obj).then((response) => {
      if (data.id) {
        toast.success("Role update successfully");
      } else {
        toast.success("Role added successfully");
      }
      reset({});
      navigate('/manage-role');
    }).catch((error) => {
      toast.error("Something Went Wrong");
    });
  };
  return (
    <div>
      <div className="header-class header-shadow">
        <div style={{ fontWeight: 'bold', fontSize: '25px' }} className="m-1">
          <span>MANAGE ROLES</span>
        </div>
        <form onSubmit={handleSubmit(onSave)}>
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
                  {
                    MenuList && MenuList.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.menu}</td>
                          <td>
                            {
                              item.is_view != null ? <input type="checkbox" checked={item.is_view} onChange={(e) => {
                                const updatedMenuList = [...MenuList];
                                updatedMenuList[index].is_view = e.target.checked;
                                setMenuList(updatedMenuList);
                              }} /> : ''
                            }
                          </td>
                          <td>
                            {
                              item.is_add != null ? <input type="checkbox" checked={item.is_add} onChange={(e) => {
                                const updatedMenuList = [...MenuList];
                                updatedMenuList[index].is_add = e.target.checked;
                                setMenuList(updatedMenuList);
                              }} /> : ''
                            }
                          </td>
                          <td>
                            {
                              item.is_edit != null ? <input type="checkbox" checked={item.is_edit} onChange={(e) => {
                                const updatedMenuList = [...MenuList];
                                updatedMenuList[index].is_edit = e.target.checked;
                                setMenuList(updatedMenuList);
                              }} /> : ''
                            }
                          </td>
                          <td>
                            {
                              item.is_delete != null ? <input type="checkbox" checked={item.is_delete} onChange={(e) => {
                                const updatedMenuList = [...MenuList];
                                updatedMenuList[index].is_delete = e.target.checked;
                                setMenuList(updatedMenuList);
                              }} /> : ''
                            }
                          </td>
                        </tr>
                      )

                    })
                  }
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

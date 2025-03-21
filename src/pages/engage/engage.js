import React, { useEffect, useState } from 'react'
import "./engage.css";
import { Col, Row } from 'reactstrap';
import { GetApi, PostApi } from '../../services/ApiService';
import { toast } from 'react-toastify';
import profileImage from "../../assets/ProfilePhoto.png";
import HelperService from '../../services/HelperService';
import { useForm } from 'react-hook-form';

function Engage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [data, setdata] = useState([]);
  const [chatData, setChatData] = useState([]);
  const [chatList, setChatList] = useState([]);
  useEffect(() => {
    getUserList();
  }, []);
  const getUserList = () => {
    GetApi("/users/all/list", {}).then((response) => {
      setdata(response);
      if (response && response.length > 0) {
        setChatData(response[0]);
      }
    }).catch((error) => {
      toast.error("Something Went Wrong");
    });
  };
  const chatWithUser = (item) => {
    var obj = {};
    obj.from_id = HelperService.getLoginUserData('id');
    obj.to_id = chatData.id;
    GetApi("/chat/all/list", obj).then((response) => {
      setChatList(response);
      setChatData(item);
    }).catch((error) => {
      toast.error("Something Went Wrong");
    });
  };
  const onSendMessage = (data) => {
    var obj = {};
    obj.message = data.message;
    obj.from_id = HelperService.getLoginUserData('id');
    obj.to_id = chatData.id;
    PostApi("/chat", obj).then((response) => {
    }).catch((error) => {
      toast.error("Something Went Wrong");
    });
  };
  return (
    <>
      <Row>
        <Col lg={3}>
          <title>WhatsApp</title>
          <div id="sidebar-header">
            {/* <img decoding="async" src="https://picsum.photos/id/10/50" alt="" className="avatar" id="profile-image" /> */}
            <div className="toolbar">
              <img decoding="async" src="icons/communities.svg" alt="" className="icon" />
              <img decoding="async" src="icons/status.svg" alt="" className="icon" />
              <img decoding="async" src="icons/new-chat.svg" alt="" className="icon" />

            </div>
          </div> {/* Closing div for sidebar-header */}
          {/* <img decoding="async" src="icons/filter.svg" alt="" className="icon" /> */}

          {/* <div className="connectivity-notification">
            <img decoding="async" src="icons/warning.svg" alt="Offline warning" />
            <div>
              <div className="connectivity-notification-title">
                Computer not connected
              </div>
              <span>
                Make sure your computer has an active Internet connection
              </span>
            </div>
          </div> */}
          <section id="sidebar-contents">
            <div id="chats-list">
              {/* <div className="chat-tile">
                <img decoding="async" src="https://picsum.photos/id/103/50" alt="" className="chat-tile-avatar" />
                <div className="chat-tile-details">
                  <div className="chat-tile-title">
                    <span>Friends 🤗</span>
                    <span>Tuesday</span>
                  </div>
                  <div className="chat-tile-subtitle">
                    <span>You: hey there! how are you?</span>
                    <span className="chat-tile-menu">
                      <img decoding="async" src="icons/pin.svg" alt="" className="pin" />
                    </span>
                  </div>
                </div>
              </div> */}
              {/* <div className="chat-tile">
                <img decoding="async" src="https://picsum.photos/id/104/50" alt="" className="chat-tile-avatar" />
                <div className="chat-tile-details">
                  <div className="chat-tile-title">
                    <span>Family</span>
                    <span>10:34 Pm</span>
                  </div>
                  <div className="chat-tile-subtitle">
                    <span>Papa: You gotta be kidding me</span>
                    <span className="chat-tile-menu">
                      <img decoding="async" src="icons/pin.svg" alt="" className="pin" />
                    </span>
                  </div>
                </div>
              </div> */}
              {data &&
                data.map((item, index) => {
                  return (
                    <div className="chat-tile" onClick={() => { chatWithUser(item) }}>
                      <img src={profileImage} alt="Profile" className="chat-tile-avatar" height={50} width={50} />
                      <div className="chat-tile-details">
                        <div className="chat-tile-title">
                          <span>{HelperService.getLoginUserData('id') == item.id ? 'You' : item.first_name + item.last_name} </span>
                          {/* <span>Saturday</span> */}
                        </div>
                        {/* <div className="chat-tile-subtitle">
                          <span>You do not understand what I'm </span>
                          <span className="chat-tile-menu">
                            <img decoding="async" src="icons/pin.svg" alt="" className="pin" />
                          </span>
                        </div> */}
                      </div>
                    </div>
                  )
                })}




            </div>
          </section>
        </Col>
        {chatData &&
          <Col lg={8} style={{ background: 'black', height: '90vh' }}>
            <div>
              <div id="chat-window">
                <div id="chat-window-header">
                  {/* <img src={profileImage} alt="Profile" className="chat-tile-avatar" height={50} width={50} /> */}
                  <img decoding="async" src={profileImage} alt="" className="avatar" id="profile-image" />
                  <div id="active-chat-details">
                    <h3>{chatData?.first_name} {chatData?.last_name}</h3>
                    {/* <div className="info">You and 69 others</div> */}
                  </div>
                  <img decoding="async" src="icons/search.svg" alt="" className="icon" />

                </div>
              </div>
              {
                chatList && chatList.length > 0 && chatList.map((item, index) => {
                  return (
                    HelperService.getLoginUserData('id') != item.from_id ?
                      // <div className="chat-message-group">
                      //   <img decoding="async" src={profileImage} alt="" className="chat-message-avatar" />
                      //   <div className="chat-messages">
                      //     <div className="chat-message-container">
                      //       <div className="chat-message chat-message-first">
                      //         {/* <div className="chat-message-sender">Kshitiz</div> */}
                      //         {item?.message}
                      //         <span className="chat-message-time">7:22 am</span>
                      //       </div>
                      //     </div>
                      //   </div>
                      // </div>
                      <div
                        className="message received"
                        style={{ float: 'left', width: '100vw' }}>
                        <p>{item.message}</p>
                        <span className="timestamp">10:00 AM</span>
                      </div>
                      :
                      // <div className="chat-message-group2">
                      //   <img decoding="async" src={profileImage} alt="" className="chat-message-avatar" />
                      //   <div className="chat-messages">
                      //     <div className="chat-message-container">
                      //       <div className="chat-message chat-message-first">
                      //         {/* <div className="chat-message-sender">Kshitiz</div> */}
                      //         {item?.message}
                      //         <span className="chat-message-time">8:22 am</span>
                      //       </div>
                      //     </div>
                      //   </div>
                      // </div>
                      <div className="message sent" style={{ float: 'right', width: '100vw' }}>
                        <p>{item.message}</p>
                        <span className="timestamp">10:01 AM</span>
                      </div>
                  )
                })
              }
              <div style={{ marginTop: '250px' }}>
                <form onSubmit={handleSubmit(onSendMessage)}>
                  <div className="input-group">
                    <input
                      type="text"
                      autoComplete="off"
                      placeholder="Type Message"
                      {...register("message", {
                        required: true,
                      })}
                    />
                    <div>
                      {errors.message && (
                        <span className="text-danger fs-12">Please Enter Message</span>
                      )}
                    </div>
                  </div>
                  <button type="submit" className="login-btn">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </Col>
        }
      </Row >
    </>
  )
}

export default Engage

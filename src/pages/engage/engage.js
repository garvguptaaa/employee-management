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
      console.log('response', response)
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
            {/* <img decoding="async" src="https://picsum.photos/id/10/50" alt="" class="avatar" id="profile-image" /> */}
            <div class="toolbar">
              <img decoding="async" src="icons/communities.svg" alt="" class="icon" />
              <img decoding="async" src="icons/status.svg" alt="" class="icon" />
              <img decoding="async" src="icons/new-chat.svg" alt="" class="icon" />

            </div>
          </div> {/* Closing div for sidebar-header */}
          {/* <img decoding="async" src="icons/filter.svg" alt="" class="icon" /> */}

          {/* <div class="connectivity-notification">
            <img decoding="async" src="icons/warning.svg" alt="Offline warning" />
            <div>
              <div class="connectivity-notification-title">
                Computer not connected
              </div>
              <span>
                Make sure your computer has an active Internet connection
              </span>
            </div>
          </div> */}
          <section id="sidebar-contents">
            <div id="chats-list">
              {/* <div class="chat-tile">
                <img decoding="async" src="https://picsum.photos/id/103/50" alt="" class="chat-tile-avatar" />
                <div class="chat-tile-details">
                  <div class="chat-tile-title">
                    <span>Friends 🤗</span>
                    <span>Tuesday</span>
                  </div>
                  <div class="chat-tile-subtitle">
                    <span>You: hey there! how are you?</span>
                    <span class="chat-tile-menu">
                      <img decoding="async" src="icons/pin.svg" alt="" class="pin" />
                    </span>
                  </div>
                </div>
              </div> */}
              {/* <div class="chat-tile">
                <img decoding="async" src="https://picsum.photos/id/104/50" alt="" class="chat-tile-avatar" />
                <div class="chat-tile-details">
                  <div class="chat-tile-title">
                    <span>Family</span>
                    <span>10:34 Pm</span>
                  </div>
                  <div class="chat-tile-subtitle">
                    <span>Papa: You gotta be kidding me</span>
                    <span class="chat-tile-menu">
                      <img decoding="async" src="icons/pin.svg" alt="" class="pin" />
                    </span>
                  </div>
                </div>
              </div> */}
              {data &&
                data.map((item, index) => {
                  return (
                    <div class="chat-tile" onClick={() => { chatWithUser(item) }}>
                      <img src={profileImage} alt="Profile" class="chat-tile-avatar" height={50} width={50} />
                      <div class="chat-tile-details">
                        <div class="chat-tile-title">
                          <span>{HelperService.getLoginUserData('id') == item.id ? 'You' : item.first_name + item.last_name} </span>
                          {/* <span>Saturday</span> */}
                        </div>
                        {/* <div class="chat-tile-subtitle">
                          <span>You do not understand what I'm </span>
                          <span class="chat-tile-menu">
                            <img decoding="async" src="icons/pin.svg" alt="" class="pin" />
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
                  {/* <img src={profileImage} alt="Profile" class="chat-tile-avatar" height={50} width={50} /> */}
                  <img decoding="async" src={profileImage} alt="" class="avatar" id="profile-image" />
                  <div id="active-chat-details">
                    <h3>{chatData?.first_name} {chatData?.last_name}</h3>
                    {/* <div class="info">You and 69 others</div> */}
                  </div>
                  <img decoding="async" src="icons/search.svg" alt="" class="icon" />

                </div>
              </div>
              <div id="chat-window-contents">
                {/* <div class="datestamp-container">
                <span class="datestamp">
                  03/05/2023
                </span>
              </div> */}
                <div class="chat-message-group">
                  <img decoding="async" src={profileImage} alt="" class="chat-message-avatar" />
                  <div class="chat-messages">
                    <div class="chat-message-container">
                      <div class="chat-message chat-message-first">
                        {/* <div class="chat-message-sender">Kshitiz</div> */}
                        Hey there, how are you doing?
                        <span class="chat-message-time">7:22 am</span>
                      </div>
                      <div class="emoji-toolbar">
                        <img decoding="async" src="icons/emoji.svg" alt="" class="icon reaction-button" />
                        <div class="reaction-emoji-selector">
                          <a href="#" class="icon">👍🏻</a>
                          <a href="" class="icon">💖</a>
                          <a href="" class="icon">😂</a>
                          <a href="" class="icon"></a>
                          <a href="" class="icon"></a>
                          <a href="" class="icon"></a>
                        </div>
                      </div>
                    </div>
                    <div class="chat-message">
                      Are you up to some fun this weekend?
                      <span class="chat-message-time">7:22 am</span>
                    </div>
                    <div class="chat-message">
                      I'm thinking of going to the beach
                      <span class="chat-message-time">7:23 am</span>
                    </div>
                  </div>
                </div>

                <div class="chat-message-group" style={{ float: 'inline-end' }}>
                  <img decoding="async" src={profileImage} alt="" class="chat-message-avatar" />
                  <div class="chat-messages">
                    <div class="chat-message-container">
                      <div class="chat-message chat-message-first">
                        {/* <div class="chat-message-sender">Kshitiz</div> */}
                        Hey there, how are you doing?
                        <span class="chat-message-time">7:22 am</span>
                      </div>
                      <div class="emoji-toolbar">
                        <img decoding="async" src="icons/emoji.svg" alt="" class="icon reaction-button" />
                        <div class="reaction-emoji-selector">
                          <a href="#" class="icon">👍🏻</a>
                          <a href="" class="icon">💖</a>
                          <a href="" class="icon">😂</a>
                          <a href="" class="icon"></a>
                          <a href="" class="icon"></a>
                          <a href="" class="icon"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
      </Row>
    </>
  )
}

export default Engage

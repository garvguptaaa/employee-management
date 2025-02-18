import React from 'react'
import "./engage.css";
import { Col, Row } from 'reactstrap';

function Engage() {
  return (
    <>
      <Row>
        <Col lg={3}>
          <title>WhatsApp</title>
          <div id="sidebar-header">
            <img decoding="async" src="https://picsum.photos/id/10/50" alt="" class="avatar" id="profile-image" />
            <div class="toolbar">
              <img decoding="async" src="icons/communities.svg" alt="" class="icon" />
              <img decoding="async" src="icons/status.svg" alt="" class="icon" />
              <img decoding="async" src="icons/new-chat.svg" alt="" class="icon" />
              <div class="dropdown">
                <img decoding="async" src="icons/menu.svg" alt="" class="icon dropdown-button" />
                <div class="dropdown-content">
                  <a href="#">New group</a>
                  <a href="#">New community</a>
                  <a href="#">Archived</a>
                  <a href="#">Starred messages</a>
                  <a href="#">Select chats</a>
                  <a href="#">Settings</a>
                  <a href="#">Log out</a>
                </div>
              </div>
            </div>
          </div> {/* Closing div for sidebar-header */}
          <img decoding="async" src="icons/filter.svg" alt="" class="icon" />

          <div class="connectivity-notification">
            <img decoding="async" src="icons/warning.svg" alt="Offline warning" />
            <div>
              <div class="connectivity-notification-title">
                Computer not connected
              </div>
              <span>
                Make sure your computer has an active Internet connection
              </span>
            </div>
          </div>
          <section id="sidebar-contents">
            <div id="chats-list">
              <div class="chat-tile">
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
              </div>
              <div class="chat-tile">
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
              </div>
              <div class="chat-tile">
                <img decoding="async" src="https://picsum.photos/id/106/50" alt="" class="chat-tile-avatar" />
                <div class="chat-tile-details">
                  <div class="chat-tile-title">
                    <span>Amor 💖</span>
                    <span>Saturday</span>
                  </div>
                  <div class="chat-tile-subtitle">
                    <span>You do not understand what I'm </span>
                    <span class="chat-tile-menu">
                      <img decoding="async" src="icons/pin.svg" alt="" class="pin" />
                    </span>
                  </div>
                </div>
              </div>
              <div class="chat-tile">
                <img decoding="async" src="https://picsum.photos/id/110/50" alt="" class="chat-tile-avatar" />
                <div class="chat-tile-details">
                  <div class="chat-tile-title">
                    <span>John</span>
                    <span>Saturday</span>
                  </div>
                  <div class="chat-tile-subtitle">
                    <span>Reply in group fast</span>
                    <span class="chat-tile-menu">
                      <img decoding="async" src="icons/pin.svg" alt="" class="pin" />
                    </span>
                  </div>
                </div>
              </div>


            </div>
          </section>
        </Col>
        <Col lg={8}>
          <div id="chat-window">
            <div id="chat-window-header">
              <img decoding="async" src="https://picsum.photos/id/103/50" alt="" class="avatar" id="profile-image" />
              <div id="active-chat-details">
                <h3>Friends 🤗</h3>
                <div class="info">You and 69 others</div>
              </div>
              <img decoding="async" src="icons/search.svg" alt="" class="icon" />
              <div class="dropdown">
                <img decoding="async" src="icons/menu.svg" alt="" class="icon dropdown-button" />
                <div class="dropdown-content contact-menu">
                  <a href="#">Contact info</a>
                  <a href="#">Select messages</a>
                  <a href="#">Close chat</a>
                  <a href="#">Mute notifications</a>
                  <a href="#">Disappearing messages</a>
                  <a href="#">Clear messages</a>
                  <a href="#">Delete chat</a>
                  <a href="#">Report</a>
                  <a href="#">Block</a>
                </div>
              </div>
            </div>
          </div>
          <div id="chat-window-contents">
            <div class="datestamp-container">
              <span class="datestamp">
                03/05/2023
              </span>
            </div>
            <div class="chat-message-group">
              <img decoding="async" src="https://picsum.photos/50" alt="" class="chat-message-avatar" />
              <div class="chat-messages">
                <div class="chat-message-container">
                  <div class="chat-message chat-message-first">
                    <div class="chat-message-sender">Kshitiz</div>
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
            <div class="chat-message-group">
              <img decoding="async" src="https://picsum.photos/id/102/50" alt="" class="chat-message-avatar" />
              <div class="chat-messages">
                <div class="chat-message-container">
                  <div class="chat-message chat-message-first">
                    <div class="chat-message-sender">John</div>
                    Sure man
                    <span class="chat-message-time">7:30 am</span>
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
                  When are you free? Let's meet at the cafe first.
                  <span class="chat-message-time">7:30 am</span>
                </div>

              </div>
            </div>


          </div>
          <div id="chat-window-footer">
            <img decoding="async" src="icons/emoji.svg" alt="" class="icon" />
            <img decoding="async" src="icons/attachment.svg" alt="" class="icon" />

            <img decoding="async" src="icons/mic.svg" alt="" class="icon" />
          </div>
          <a class="scroll-to-top-button" href="#"><img decoding="async" src="icons/arrow-down.svg" alt="" class="icon scroll-to-top-button-icon" height="" /></a>
        </Col>
      </Row>
    </>
  )
}

export default Engage

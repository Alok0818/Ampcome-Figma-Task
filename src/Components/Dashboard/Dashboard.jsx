import React from "react";
import "./Dashboard.css";
import Sidebar from "../Sidebar/Sidebar";
import Graph from "../../assets/Graph.png";
import toggle from "../../assets/toggle.png";
import questionmark from "../../assets/questionmark.png";
import axis from "../../assets/axis.png";
import paper from "../../assets/paper.png";
import hospital from "../../assets/hospital.png";
import bell from "../../assets/bell.png";
import user from "../../assets/user.png";
import summary from "../../assets/summary.png";
import application from "../../assets/application.png";
import image1 from "../../assets/image1.png";
import person from "../../assets/person.png";
import px from "../../assets/px.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import anytime from "../../assets/anytime.png";
import clock from "../../assets/clock.png";
import video from "../../assets/video.png";
import arrow from "../../assets/arrow.png";
import i from "../../assets/i.png";
import yes from "../../assets/yes.png";
import block from "../../assets/block.png";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div id="body">
      <div className="dashboard-page-container">
      <Sidebar />
      <div className="dashboard-container">
        <div className="dashboard-header">
          <div className="dashboard-title">
            Welcome <strong>Anil Kumar</strong>
          </div>
          <div className="dashboard-subtitle">Cardiology</div>
        </div>
        <div className="dashboard-body">
          <div className="dashboard-body-left">
            <div className="earning-box">
              <img className="paper" src={paper} alt="Image" />
            </div>
            <div className="earning-bottom-box">
              <div className="earning-box1">
                <div>Appointments</div>
                <div className="number">54</div>
              </div>
              <div className="earning-box2">
                <div>EMR Finalised</div>
                <div className="number">47</div>
              </div>
              <div className="earning-box3">
                <div>Patient Registrations</div>
                <div className="number">120</div>
              </div>
              <div className="earning-box4">
                <div>KR4ALL Visits</div>
                <div className="number">30</div>
              </div>
            </div>
            <div className="appointments-shedules">
              <div className="appointment-section">
                <div className="appointment-section-header">
                  <div>Appointments</div>
                  <img
                    className="appointment-section-questionmark"
                    src={questionmark}
                    alt="Image"
                  />
                </div>
                <div className="queue-section">
                  <div className="queue-section-left">Waiting Queue (6)</div>
                  <div className="queue-section-right">View Queue</div>
                </div>
                <div className="appointment-section-image1">
                  <img className="image1" src={image1} alt="Image" />
                  <div className="appointment-section-image1-mid">
                    <div className="image1-mid1">Prajeesh</div>
                    <div className="image1-mid1-bottom">
                      <img className="person" src={person} alt="Image" />
                      <div className="person-right-box1">
                        In Person • 2:20 pm
                      </div>
                    </div>
                  </div>
                  <div className="appointment-section-image1-right">
                    <div className="red-box">
                      <img className="px" src={px} alt="Image" />
                      <div className="px-right">To be finalized</div>
                    </div>
                  </div>
                </div>
                <div className="appointment-section-image2">
                  <img className="image1" src={image2} alt="Image" />
                  <div className="appointment-section-image1-mid">
                    <div className="image2-mid2">Risha Mahin</div>
                    <div className="image1-mid1-bottom">
                      <img className="person" src={anytime} alt="Image" />
                      <div className="person-right-box1">
                        Anytime Consultation • 2:30 pm
                      </div>
                    </div>
                  </div>
                  <div className="appointment-section-image1-right">
                    <div className="yellow-box">
                      <img className="clock" src={clock} alt="Image" />
                      <div className="clock-right">Waiting • 40 min</div>
                    </div>
                  </div>
                </div>
                <div className="appointment-section-image2">
                  <img className="image1" src={image3} alt="Image" />
                  <div className="appointment-section-image1-mid">
                    <div className="image2-mid2">Riju K</div>
                    <div className="image1-mid1-bottom">
                      <img className="person" src={video} alt="Image" />
                      <div className="person-right-box1">
                        Video Consultation • 2:40 pm
                      </div>
                    </div>
                  </div>
                  <div className="appointment-section-image1-right">
                    <div className="yellow-box">
                      <img className="clock" src={clock} alt="Image" />
                      <div className="clock-right">Waiting • 40 min</div>
                    </div>
                  </div>
                </div>
                <div className="appointment-section-image2">
                  <img className="image1" src={image4} alt="Image" />
                  <div className="appointment-section-image1-mid">
                    <div className="image2-mid2">Setia S</div>
                    <div className="image1-mid1-bottom">
                      <img className="person" src={video} alt="Image" />
                      <div className="person-right-box1">
                        Video Consultation • 2:40 pm
                      </div>
                    </div>
                  </div>
                  <div className="appointment-section-image1-right">
                    <div className="yellow-box">
                      <img className="clock" src={clock} alt="Image" />
                      <div className="clock-right">Waiting • 40 min</div>
                    </div>
                  </div>
                </div>
                <div className="bottom-line"></div>
                <div className="appointment-section-bottom">
                  <div className="bottom-view">View all Appointments</div>
                  <img className="arrow" src={arrow} alt="Image" />
                </div>
              </div>
              <div className="shedules-section">
                <div className="appointment-section">
                  <div className="appointment-section-header">
                    <div>Schedule</div>
                    <img
                      className="appointment-section-questionmark"
                      src={questionmark}
                      alt="Image"
                    />
                  </div>
                  <div className="receive-box">
                    <div className="receive-box-details">
                      Receive
                      <span>
                        <img className="person" src={anytime} alt="Image" />
                      </span>
                      <strong>Anytime Consult</strong>
                    </div>
                    <img className="i" src={i} alt="Image" />
                    <img className="yes" src={yes} alt="Image" />
                  </div>
                  <div className="today">TODAY • MONDAY</div>
                  <div className="green-box-1">
                    <div className="green-sub-box-1">
                      9:00 AM - 9:40 AM • 40 minutes
                    </div>
                    <img
                      className="green-sub-box-2"
                      src={anytime}
                      alt="Image"
                    />
                    <div className="green-sub-box-3">Anytime</div>
                  </div>
                  <div className="green-box-2">
                    <div className="green-sub-box-1">
                      3:30 PM - 7:30 PM • 4 hours
                    </div>
                    <img
                      className="green-sub-box-video"
                      src={video}
                      alt="Image"
                    />
                    <div className="green-sub-box-3">Video</div>
                  </div>
                  <div className="tomorrow">TOMORROW • TUESDAY</div>
                  <div className="green-box-1">
                    <div className="green-sub-box-1">
                      9:00 AM - 9:40 AM • 40 minutes
                    </div>
                    <img className="green-sub-box-2" src={person} alt="Image" />
                    <div className="green-sub-box-3">Person</div>
                  </div>
                  <div className="green-box-2">
                    <div className="green-sub-box-1">
                      12:20 PM - 6:30 PM • 6 hours
                    </div>
                    <img
                      className="green-sub-box-video"
                      src={anytime}
                      alt="Image"
                    />
                    <div className="green-sub-box-3">Anytime</div>
                  </div>
                  <div className="green-box-2">
                    <div className="red-sub-box">
                      6:30 PM - 9:00 PM • 2 hours 30 minutes
                    </div>
                    <img
                      className="red-sub-box-block"
                      src={block}
                      alt="Image"
                    />
                    <div className="red-sub-box-text">Block</div>
                  </div>
                  <div className="wednesday">WEDNESDAY</div>
                  <div className="bottom-line"></div>
                <div className="appointment-section-bottom">
                  <div className="bottom-view-right">View all Schedule</div>
                  <img className="arrow" src={arrow} alt="Image" />
                </div>
                </div>
              </div>
            </div>
            <div className="graph">
              <div className="graph-header">
                <div className="consultation">consultation History</div>
                <div className="visit">KR4ALL Visits</div>
                <img className="toggle" src={toggle} alt="Image" />
                <div className="toggle-next">All</div>
                <img className="questionmark" src={questionmark} alt="Image" />
              </div>
              <div className="graph-details">
                <img className="axis" src={axis} alt="Image" />
                <img src={Graph} alt="Image" />
              </div>
              <div className="graph-bottom">
                <div className="bottom-1">
                  <div>
                    <div className="bottom-line-1"></div>
                    <div className="sixty-one">61</div>
                  </div>
                  <div className="bottom-text-1">In-person Visit</div>
                  <div className="bottom-sub-text-1">14 min Avg time</div>
                </div>
                <div className="bottom-2">
                  <div>
                    <div className="bottom-line-2"></div>
                    <div className="fifteen">15</div>
                  </div>
                  <div className="bottom-text-2">Online Visit</div>
                  <div className="bottom-sub-text-2">18 min Avg time</div>
                </div>
                <div className="bottom-3">
                  <div>
                    <div className="bottom-line-3"></div>
                    <div className="twelve">12</div>
                  </div>
                  <div className="bottom-text-3">Anytime Consult</div>
                  <div className="bottom-sub-text-3">20 min Avg time</div>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-body-right">
            <div>
              <img className="hospital" src={hospital} alt="Image" />
              <div className="bell-section">
                <img className="bell" src={bell} alt="Image" />
                <div className="activity">activity</div>
              </div>
              <div className="user-activity-1">
                <img className="user-1" src={user} alt="Image" />
                <div className="user-right-box">
                  <div>
                    <div className="user-text1">User Activity</div>
                    <div className="time1"> • 12:32</div>
                  </div>
                  <div className="user-detail1">
                    Vivek Kumar accepted the invitation
                  </div>
                </div>
              </div>
              <div className="user-activity-2">
                <img className="user-1" src={user} alt="Image" />
                <div className="user-right-box">
                  <div>
                    <div className="user-text1">User Activity</div>
                    <div className="time1"> • 8:16</div>
                  </div>
                  <div className="user-detail2">
                    Ritu M, blocked their calendar for 15th September
                  </div>
                </div>
              </div>
              <div className="user-activity-3">
                <img className="user-1" src={summary} alt="Image" />
                <div className="user-right-box">
                  <div>
                    <div className="user-text3">Summary</div>
                    <div className="time1"> • 8:00</div>
                  </div>
                  <div className="user-detail2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do incididunt
                  </div>
                </div>
              </div>
              <div className="user-application">
                <img className="user-1" src={application} alt="Image" />
                <div className="user-right-box">
                  <div>
                    <div className="user-application-text1">
                      Application Update
                    </div>
                    <div className="yesterday"> • yesterday</div>
                  </div>
                  <div className="user-detail2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do incididunt
                  </div>
                </div>
              </div>
              <div className="user-activity-5">
                <img className="user-1" src={user} alt="Image" />
                <div className="user-right-box">
                  <div>
                    <div className="user-text1">User Activity</div>
                    <div className="yesterday"> • 2 days ago</div>
                  </div>
                  <div className="user-detail1">
                    Vivek Kumar accepted the invitation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import "./Sidebar.css";
import dashboard from "../../assets/dashboard.png";
import queue from "../../assets/queue.png";
import appointment from "../../assets/appointment.png";
import rupee from "../../assets/rupee.png";
import bill from "../../assets/bill.png";
import setting from "../../assets/setting.png";
import profile from "../../assets/profile.png";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div className="sidebar-container">
          <div className="sidebar-inner-container">
            <div>
              <img className="dashboard-icon" onClick={() => navigate("/dashboard")} src={dashboard} alt="Image" />
            </div>
            <div>
              <img className="queue-icon"  src={queue} alt="Image" />
            </div>
            <div>
              <img className="appointment-icon" onClick={() => navigate("/appointment")} src={appointment} alt="Image" />
            </div>
            <div>
              <img className="rupee-icon" src={rupee} alt="Image" />
            </div>
            <div>
              <img className="bill-icon" src={bill} alt="Image" />
            </div>
            <div>
              <img className="setting-icon" src={setting} alt="Image" />
            </div>
          </div>
          <div className="profile-icon-div">
            <div>
            <img className="profile-icon" onClick={() => navigate("/")} src={profile} alt="Image" />
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

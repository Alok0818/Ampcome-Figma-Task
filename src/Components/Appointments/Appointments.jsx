import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Appointments.css";
import { SearchIcon, Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import search from "../../assets/search.png";
import { Select } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';


const Appointments = () => {
  const navigate = useNavigate();
  return (
    <div id="appointment-body">
      <div className="Appointments-page-container">
      <Sidebar />
      <div className="appointment-container">
        <div className="appointments-title">Appointments</div>
        <div className="appointment-subtitle">List of booked appointments</div>
        {/* <div className='add-button-box'>
            
        </div> */}
        <div className="line"></div>
        <div className="search-flex-boxes">
          <InputGroup w="300px">
            <Input borderRightWidth="0" placeholder="Search by name, number" />
            <InputRightAddon
              borderLeftWidth="0"
              bg="rgba(255, 255, 255, 1)"
              children={<img src={search} alt="logo" />}
            />
          </InputGroup>
          <Select placeholder="This weak" w="183px" ml="25px">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select placeholder="All" w="183px" ml="24px">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select placeholder="All" w="183px" ml="16px">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select placeholder="All" w="183px" ml="16px">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </div>
        <div className="list-box">
          <div className="list-box-title">
            <div>order ID</div>
            <div>patient</div>
            <div>Consultation</div>
            <div>team</div>
            <div>doctor</div>
            <div>Slot</div>
            <div>status</div>
            <div>invoice</div>
            <div>action</div>
          </div>
          <div className="list-box-details">
          <div className="list-box-detail-1"></div>
          <div className="list-box-detail-2"></div>
          <div className="list-box-detail-3"></div>
          <div className="list-box-detail-4"></div>
          <div className="list-box-detail-5"></div>
          <div className="list-box-detail-6"></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Appointments;

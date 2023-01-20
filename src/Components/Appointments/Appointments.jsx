import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Appointments.css";
import { useNavigate } from "react-router-dom";
import video from "../../assets/video.png";
import dot from "../../assets/dot.png";
import { SearchIcon, Icon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import search from "../../assets/search.png";
import { Select, Text, Code } from "@chakra-ui/react";

const Appointments = () => {
  const navigate = useNavigate();
  return (
    <div id="appointment-body">
      <div className="Appointments-page-container">
        <Sidebar />
        <div className="appointment-container">
          <div className="appointments-title">Appointments</div>
          <div className="appointment-subtitle">
            List of booked appointments
          </div>
          {/* <div className='add-button-box'>
            
        </div> */}
          <div className="line"></div>
          <div className="search-flex-boxes">
            <InputGroup w="300px">
              <Input
                borderRightWidth="0"
                placeholder="Search by name, number"
              />
              <InputRightAddon
                borderLeftWidth="0"
                bg="rgba(255, 255, 255, 1)"
                children={<img src={search} alt="logo" />}
              />
            </InputGroup>
            <div
              style={{
                position: "relative",
                zIndex: "1",
                marginRight: "-80px",
                marginLeft: "40px",
                marginTop: "-13px",
                fontWeight: "bold",
              }}
            >
              Date
            </div>
            <Select
              focusBorderColor="whitesmoke"
              placeholder="This weak"
              w="183px"
              ml="30px"
              mb="10px"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>

            <div
              style={{
                position: "relative",
                zIndex: "1",
                marginRight: "-230px",
                marginLeft: "40px",
                marginTop: "-13px",
                fontWeight: "bold",
                width: "200px",
                height: "25px",
              }}
            >
              Consultation Type
            </div>
            <Select
              focusBorderColor="whitesmoke"
              placeholder="All"
              w="183px"
              ml="24px"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <div
              style={{
                position: "relative",
                zIndex: "1",
                marginRight: "-75px",
                marginLeft: "40px",
                marginTop: "-13px",
                fontWeight: "bold",
              }}
            >
              Status
            </div>
            <Select
              focusBorderColor="whitesmoke"
              placeholder="All"
              w="183px"
              ml="16px"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <div
              style={{
                position: "relative",
                zIndex: "1",
                marginRight: "-85px",
                marginLeft: "40px",
                marginTop: "-13px",
                fontWeight: "bold",
              }}
            >
              Invoice
            </div>
            <Select
              focusBorderColor="whitesmoke"
              placeholder="All"
              w="183px"
              ml="16px"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </div>
          <div className="list-box">
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>ORDER ID</Th>
                    <Th>PATIENT</Th>
                    <Th>CONSULTATION</Th>
                    <Th>TEAM</Th>
                    <Th>DOCTOR</Th>
                    <Th>SLOT</Th>
                    <Th>STATUS</Th>
                    <Th>INVOICE</Th>
                    <Th>ACTION</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>2422562</Td>
                    <Td id="tdColor">
                      Risha Mahin
                      <div id="divColor">26,7</div>
                    </Td>
                    <Td>
                      <div style={{ display: "flex" }}>
                        <div>
                          <img className="video-icon" src={video} alt="Image" />
                        </div>
                        <Text style={{ marginLeft: "10px", marginTop: "-7px" }}>
                          Video
                        </Text>
                      </div>
                      <Text style={{ color: "grey" }}>First Consultation</Text>
                    </Td>
                    <Td></Td>
                    <Td>Anil Kumar</Td>
                    <Td>
                      <div>Jul 3, 2021</div>
                      <div>8:53 AM</div>
                    </Td>
                    <Td>
                      <Code
                        style={{
                          padding: "5px",
                          borderRadius: "20px",
                          width: "100px",
                          textAlign: "center",
                        }}
                      >
                        Cancelled
                      </Code>
                    </Td>
                    <Td>
                      <Code
                        style={{
                          padding: "5px",
                          borderRadius: "20px",
                          width: "100px",
                          textAlign: "center",
                        }}
                      >
                        Refunded
                      </Code>
                    </Td>

                    <Td>
                      <Text style={{ fontSize: "34px", textAlign: "right" }}>
                        ⁝
                      </Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>2422562</Td>
                    <Td id="tdColor">
                      Risha Mahin
                      <div id="divColor">26,7</div>
                    </Td>
                    <Td>
                      {" "}
                      <div style={{ display: "flex" }}>
                        <div>
                          <img className="video-icon" src={video} alt="Image" />
                        </div>
                        <Text style={{ marginLeft: "10px", marginTop: "-7px" }}>
                          Video
                        </Text>
                      </div>
                      <Text style={{ color: "grey" }}>First Consultation</Text>
                    </Td>
                    <Td>Medical Camp</Td>
                    <Td>Anil Kumar</Td>
                    <Td>
                      <div>Jul 3, 2021</div>
                      <div>8:53 AM</div>
                    </Td>
                    <Td>
                      <Code
                        style={{
                          padding: "5px",
                          borderRadius: "20px",
                          width: "100px",
                          textAlign: "center",
                        }}
                      >
                        Cancelled
                      </Code>
                    </Td>
                    <Td>
                      <Code
                        colorScheme="red"
                        style={{
                          padding: "5px",
                          borderRadius: "20px",
                          width: "100px",
                          textAlign: "center",
                          color: "red",
                        }}
                      >
                        Unpaid
                      </Code>
                    </Td>

                    <Td>
                      <Text style={{ fontSize: "34px", textAlign: "right" }}>
                        ⁝
                      </Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>2422562</Td>
                    <Td id="tdColor">
                      Risha Mahin
                      <div id="divColor">26,7</div>
                    </Td>
                    <Td>
                      {" "}
                      <div style={{ display: "flex" }}>
                        <div>
                          <img className="video-icon" src={video} alt="Image" />
                        </div>
                        <Text style={{ marginLeft: "10px", marginTop: "-7px" }}>
                          Video
                        </Text>
                      </div>
                      <Text style={{ color: "grey" }}>First Consultation</Text>
                    </Td>
                    <Td></Td>
                    <Td>Anil Kumar</Td>
                    <Td>
                      <div>Jul 3, 2021</div>
                      <div>8:53 AM</div>
                    </Td>
                    <Td>
                      <Code
                        style={{
                          padding: "5px",
                          borderRadius: "20px",
                          width: "100px",
                          textAlign: "center",
                        }}
                      >
                        Cancelled
                      </Code>
                    </Td>
                    <Td>
                      <Code
                        colorScheme="green"
                        style={{
                          padding: "5px",
                          borderRadius: "20px",
                          width: "100px",
                          textAlign: "center",
                          color: "green",
                        }}
                      >
                        Paid
                      </Code>
                    </Td>

                    <Td>
                      <Text style={{ fontSize: "34px", textAlign: "right" }}>
                        ⁝
                      </Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>2422562</Td>
                    <Td id="tdColor">
                      Risha Mahin
                      <div id="divColor">26,7</div>
                    </Td>
                    <Td>
                      {" "}
                      <div style={{ display: "flex" }}>
                        <div>
                          <img className="video-icon" src={video} alt="Image" />
                        </div>
                        <Text style={{ marginLeft: "10px", marginTop: "-7px" }}>
                          Video
                        </Text>
                      </div>
                      <Text style={{ color: "grey" }}>First Consultation</Text>
                    </Td>
                    <Td>Medical Camp</Td>
                    <Td>Anil Kumar</Td>
                    <Td>
                      <div>Jul 3, 2021</div>
                      <div>8:53 AM</div>
                    </Td>
                    <Td>
                      <Code
                        style={{
                          padding: "5px",
                          borderRadius: "20px",
                          width: "100px",
                          textAlign: "center",
                        }}
                      >
                        Cancelled
                      </Code>
                    </Td>
                    <Td>
                      <Code
                        colorScheme="green"
                        style={{
                          padding: "5px",
                          borderRadius: "20px",
                          width: "100px",
                          textAlign: "center",
                          color: "green",
                        }}
                      >
                        Paid
                      </Code>
                    </Td>

                    <Td>
                      <Text style={{ fontSize: "34px", textAlign: "right" }}>
                        ⁝
                      </Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>2422562</Td>
                    <Td id="tdColor">
                      Risha Mahin
                      <div id="divColor">26,7</div>
                    </Td>
                    <Td>
                      {" "}
                      <div style={{ display: "flex" }}>
                        <div>
                          <img className="video-icon" src={video} alt="Image" />
                        </div>
                        <Text style={{ marginLeft: "10px", marginTop: "-7px" }}>
                          Video
                        </Text>
                      </div>
                      <Text style={{ color: "grey" }}>First Consultation</Text>
                    </Td>
                    <Td></Td>
                    <Td>Anil Kumar</Td>
                    <Td>
                      <div>Jul 3, 2021</div>
                      <div>8:53 AM</div>
                    </Td>
                    <Td>
                      <Code
                        style={{
                          padding: "5px",
                          borderRadius: "20px",
                          width: "100px",
                          textAlign: "center",
                        }}
                      >
                        Cancelled
                      </Code>
                    </Td>
                    <Td>
                      <Code
                        colorScheme="red"
                        style={{
                          padding: "5px",
                          borderRadius: "20px",
                          width: "100px",
                          textAlign: "center",
                          color: "red",
                        }}
                      >
                        Unpaid
                      </Code>
                    </Td>

                    <Td>
                      <Text style={{ fontSize: "34px", textAlign: "right" }}>
                        ⁝
                      </Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>2422562</Td>
                    <Td id="tdColor">
                      Risha Mahin
                      <div id="divColor">26,7</div>
                    </Td>
                    <Td>
                      {" "}
                      <div style={{ display: "flex" }}>
                        <div>
                          <img className="video-icon" src={video} alt="Image" />
                        </div>
                        <Text style={{ marginLeft: "10px", marginTop: "-7px" }}>
                          Video
                        </Text>
                      </div>
                      <Text style={{ color: "grey" }}>First Consultation</Text>
                    </Td>
                    <Td></Td>
                    <Td>Anil Kumar</Td>
                    <Td>
                      <div>Jul 3, 2021</div>
                      <div>8:53 AM</div>
                    </Td>
                    <Td>
                      <Code
                        style={{
                          padding: "5px",
                          borderRadius: "20px",
                          width: "100px",
                          textAlign: "center",
                        }}
                      >
                        Cancelled
                      </Code>
                    </Td>
                    <Td>
                      <Code
                        colorScheme="green"
                        style={{
                          padding: "5px",
                          borderRadius: "20px",
                          width: "100px",
                          textAlign: "center",
                          color: "green",
                        }}
                      >
                        Paid
                      </Code>
                    </Td>

                    <Td>
                      <Text style={{ fontSize: "34px", textAlign: "right" }}>
                        ⁝
                      </Text>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;

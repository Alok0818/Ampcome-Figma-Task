import React from "react";
import "./Login.css";
import logo from "../../assets/logo.svg";
import { Select } from "@chakra-ui/react";
import { Input } from '@chakra-ui/react'
import { Button} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login-body">
      <div className="Login-container">
        <div className="login-logo">
          <div className="title">Welcome to App Name</div>
          <div className="sub-title">
            Get ahead of the curve. Join the next generation of health heroes.
          </div>
          <img className="logo" src={logo} alt="image" />
        </div>
        <div className="login-box">
          <div className="login-title">Sign-in to your account</div>
          <Input placeholder='Username' mt="16px" />
          <Input placeholder='Password' mt="16px" />
          <Select placeholder="Select Unit Name" mt="16px">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Button onClick={() => navigate("/dashboard")} colorScheme='blue' rounded="12px" mt="48px" w="293px" bg="rgba(252, 105, 100, 1)" _hover={{ bg: "rgba(252, 105, 100, 1)" }}>Sign In</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;

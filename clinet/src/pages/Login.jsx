import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { login } from "../redux/apiCalls";
import styled from "styled-components";

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  transition: all 0.5s ease;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
  border: 1px solid white;
`;

const Login = () => {
  const [username, setName] = useState("");
  const [password, setPass] = useState("");
  const { isFetching, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div>
      <Navbar />
      <div className="reg_con_login">
        <div className="l_reg_wrap">
          <h1>SIGN IN</h1>
          <form>
            <input
              type="text"
              placeholder="username"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <input
              type="password"
              placeholder="password"
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />

            <Button onClick={handleClick} disabled={isFetching}>
              LOGIN
            </Button>
            {error ? (
              <span className="text-red-500 underline">
                Something Went Wrong
              </span>
            ) : (
              <></>
            )}
            <a>DO NOT REMEMBER THE PASSWORD?</a>
            <a>CREATE A NEW ACCOUNT</a>
          </form>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Login;

import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { publicRequest } from "../requestMethods";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [email, setEmail] = useState("");
  const [Data, setData] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (password != cpassword) {
      console.log("password doesent match");
    } else {
      const createAcc = async () => {
        const res = await publicRequest.post("/auth/register", {
          username,
          password,
          email,
        });
        console.log(res);
        setData(true);
      };
      createAcc();
    }
  };

  return (
    <div>
      <Navbar />
      <div className="reg_con">
        <div className="reg_wrap">
          <h1>CREATE AN ACCOUNT</h1>
          <form>
            <input type="text" placeholder="name" />
            <input type="text" placeholder="last name" />
            <input
              type="text"
              placeholder="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="confirm password"
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
            />
            {password != cpassword && (
              <span className="text-red-300">Password does not Match</span>
            )}
            {Data && (
              <span className="text-green-600">
                Account Has been created redirect to{" "}
                <Link className="underline" to="/">
                  Login page
                </Link>{" "}
                to login{" "}
              </span>
            )}
            <span>
              By creating an account, I consent to the processing of my personal
              data on accordance with the <b>PRIVACY POLICY</b>
            </span>

            <button onClick={handleClick}>Create</button>
          </form>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Register;

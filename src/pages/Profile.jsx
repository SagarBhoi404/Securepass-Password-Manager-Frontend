import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../constant";
import { toast } from "react-toastify";
import Footer from "../components/Footer";

const Profile = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [email, setEmail] = useState("");

  const fetchUser = async () => {
    const response = await fetch(API_BASE_URL + "auth/user", {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "applicaton/json",
      },
    });

    const result = await response.json();
    if (result.error) {
      toast.error(result.message);
      if (response.status === 401) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    } else {
      setEmail(result.user.email);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <Navbar />

      <div className="container text-center my-5">
        <h4 className="my-3">Profile</h4>

        <div className="mt-5">
          <div>
            <span
              className="px-4 py-2 text-white rounded"
              style={{ background: "#2ecc71" }}
            >
              {email}
            </span>
          </div>
          <Button
            className="mt-4 mx-2"
            variant="outlined"
            onClick={() => navigate("/aeskey-change")}
          >
            Change AES Key
          </Button>
          <Button
            className="mt-4 mx-2"
            variant="outlined"
            onClick={() => navigate("/password-change")}
          >
            Change Password
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;

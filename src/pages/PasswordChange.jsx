import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {
  Button,
  CircularProgress,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { API_BASE_URL } from "../constant";
import Footer from "../components/Footer";

const PasswordChange = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();
  const [showBtnLoader, setBtnLoader] = useState(false);
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnLoader(true);
    const form = e.target;
    const formData = new FormData(form);

    const data = {
      currentPassword: formData.get("currentPassword"),
      newPassword: formData.get("newPassword"),
    };

    try {
      const response = await fetch(API_BASE_URL + "auth/user/password", {
        method: "PUT",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (result.error) {
        toast.error(result.message);
        if (response.status === 401) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      } else {
        form.reset();
        toast.success(result.message);
      }
      setBtnLoader(false);
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.log(error);

      setBtnLoader(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="container text-center my-5">
        <h4 className="my-3">Change Password</h4>

        <div className="d-flex justify-content-center mt-5">
          <form style={{ width: "400px" }} onSubmit={handleSubmit}>
            <div className="mb-4">
              <FormControl fullWidth variant="standard">
                <InputLabel htmlFor="standard-adornment-password">
                  Enter Current Password
                </InputLabel>
                <Input
                  name="currentPassword"
                  required
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <div className="mb-4">
              <FormControl fullWidth variant="standard">
                <InputLabel htmlFor="standard-adornment-password">
                  Enter New Password
                </InputLabel>
                <Input
                  name="newPassword"
                  required
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <div className="mb-3">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={showBtnLoader}
              >
                {!showBtnLoader ? (
                  "Update"
                ) : (
                  <CircularProgress size={25} color="inherit" />
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PasswordChange;

import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  CircularProgress,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { API_BASE_URL } from "../constant.js";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();
  const [showBtnLoader, setBtnLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnLoader(true);
    const form = e.target;
    const formData = new FormData(form);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const response = await fetch(API_BASE_URL + "auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (result.error) {
        toast.error(result.message);
      } else {
        localStorage.setItem("token", result.token);
        form.reset();
        navigate("/dashboard");
      }
      setBtnLoader(false);
    } catch (error) {
      alert("An error occurred. Please try again.");
      setBtnLoader(false);
    }
  };

  return (
    <div className="login-wrapper">
      <h1 className="text-white mb-5">SecurePass - Password Manager</h1>
      <div className="login-box p-4 rounded">
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <TextField
              name="email"
              label="Email"
              variant="standard"
              fullWidth
              required
              type="email"
            />
          </div>
          <div className="mb-4">
            <FormControl fullWidth variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                name="password"
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
                "Login"
              ) : (
                <CircularProgress size={25} color="inherit" />
              )}
            </Button>
          </div>
          <div className="mt-4 text-center">
            <p>
              Don't have an account?{" "}
              <Link to={"/signup"} style={{ textDecoration: "none" }}>
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

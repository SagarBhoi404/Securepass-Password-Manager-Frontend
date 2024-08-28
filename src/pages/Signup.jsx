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

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [showAES, setShowAES] = useState(false);
  const [showBtnLoader, setBtnLoader] = useState(false);

  const handleClickShowAES = () => setShowAES((show) => !show);

  const handleMouseDownAES = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnLoader(true);
    const form = e.target;
    const formData = new FormData(form);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
      aesKey: formData.get("aeskey"),
    };

    // Validate AES Key length
    if (data.aesKey.length < 32) {
      toast.error("AES Key must be exactly 32 characters long.");
      setBtnLoader(false);
      return;
    }

    try {
      const response = await fetch(API_BASE_URL + "auth/register", {
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
        toast.success("Registration successful!");
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
      <h1 className="text-white text-center mb-5">SecurePass - Password Manager</h1>
      <div className="login-box p-4 rounded">
        <h2 className="text-center mb-4">Create new account</h2>
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
                required
              />
            </FormControl>
          </div>
          <div className="mb-4">
            <FormControl fullWidth variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                AES Key
              </InputLabel>
              <Input
                name="aeskey"
                type={showAES ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowAES}
                      onMouseDown={handleMouseDownAES}
                    >
                      {showAES ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                required
              />
            </FormControl>
            <p className="mt-2 text-danger fw-bold">
              *Note: The AES key is your master key for adding and viewing your
              passwords. Remember it carefully and do not share it with anyone.
              The AES Key must be 32 characters.
            </p>
          </div>
          <div className="mb-3">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={showBtnLoader}
            >
              {!showBtnLoader ? (
                "Signup"
              ) : (
                <CircularProgress size={25} color="inherit" />
              )}
            </Button>
          </div>
          <div className="mt-4 text-center">
            <p>
              Already have an account?{" "}
              <Link to={"/login"} style={{ textDecoration: "none" }}>
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {
  AppBar,
  Toolbar,
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  Grid,
  InputAdornment,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Input,
  CircularProgress,
} from "@mui/material";
import {
  Search as SearchIcon,
  Visibility as VisibilityIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  VisibilityOff,
  Visibility,
} from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import PasswordCard from "../components/PasswordCard";
import { API_BASE_URL } from "../constant.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Footer from "../components/Footer";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [passwords, setPasswords] = useState([]);
  const [editData, seteditData] = useState({
    id: "",
    account: "",
    username: "",
    password: "",
    aesKey: "",
  });

  const [openpass, setOpenpass] = useState(false);
  const [open, setOpen] = useState(false);
  const [openedit, setOpenedit] = useState(false);
  const [viewID, setviewID] = useState("");
  const [passtext, setpasstext] = useState("");

  const handleClickOpen = (id) => {
    setviewID(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseedit = () => {
    setOpenedit(false);
  };

  const handleClosepass = () => {
    setOpenpass(false);
    setviewID("");
    setpasstext("");
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleEdit = (id, account, username) => {
    // Implement edit functionality here
    seteditData({ id, account, username });
    setOpenedit(true);
  };

  const handleEditOnChange = (e) => {
    const { name, value } = e.target;
    seteditData({ ...editData, [name]: value });
  };

  const handleDelete = async (id) => {
    // Implement delete functionality here

    const isDelete = confirm("Are you sure to delete?");
    if (isDelete) {
      try {
        const response = await fetch(API_BASE_URL + "passwords/" + id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });

        const result = await response.json();
        // console.log(result);

        if (result.error) {
          toast.error(result.message);
        } else {
          fetchPasswords();
          toast.success(result.message);
        }
      } catch (error) {
        // console.log(error);
        toast.error(error);
      }
    }
  };

  const filteredPasswords = passwords.filter((password) =>
    password.account.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [showAES, setShowAES] = useState(false);
  const [showBtnLoader, setBtnLoader] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

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
      account: formData.get("account"),
      username: formData.get("username"),
      password: formData.get("password"),
      aesKey: formData.get("aeskey"),
    };

    // Validate AES Key length
    if (data.aesKey.length < 32) {
      toast.error("AES Key must be exactly 32 characters long.");
      setBtnLoader(false);
      return;
    }
    setBtnLoader(false);

    try {
      const response = await fetch(API_BASE_URL + "passwords/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
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
        toast.success(result.message);
        form.reset();
        fetchPasswords();
      }
      setBtnLoader(false);
    } catch (error) {
      alert("An error occurred. Please try again.");
      setBtnLoader(false);
    }
  };

  const fetchPasswords = async () => {
    try {
      const response = await fetch(API_BASE_URL + "passwords/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      const result = await response.json();
      if (response.status === 401) {
        toast.error(result.message);
        localStorage.removeItem("token");
        navigate("/login");
      }
      setPasswords(result);
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    setBtnLoader(true);
    const form = e.target;
    const formData = new FormData(form);

    const data = {
      id: formData.get("id"),
      account: formData.get("account"),
      username: formData.get("username"),
      password: formData.get("password"),
      aesKey: formData.get("aeskey"),
    };


    setBtnLoader(false);

    try {
      const response = await fetch(API_BASE_URL + "passwords/"+data.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
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
        toast.success(result.message);
        form.reset();
        fetchPasswords();
        setOpenedit(false)
      }
      setBtnLoader(false);
    } catch (error) {
      alert("An error occurred. Please try again.");
      setBtnLoader(false);
    }
  };

  useEffect(() => {
    fetchPasswords();
  }, []);
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="text-center mt-4">
          <TextField
            variant="outlined"
            placeholder="Search accounts…"
            value={searchQuery}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              className: "bg-white rounded",
            }}
            fullWidth
            style={{ maxWidth: "600px" }}
          />
        </div>

        <div className="text-center text-lg-end mt-4 mb-3">
          <Button
            sx={{}}
            variant="contained"
            startIcon={<AddIcon />}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add
          </Button>
        </div>

        <Typography variant="h5">All Passwords</Typography>
        <div className="row mt-3">
          {filteredPasswords.length > 0 ? (
            filteredPasswords.map((password) => (
              <PasswordCard
                key={password._id}
                id={password._id}
                account={password.account}
                username={password.username}
                encryptedPassword={"*******************"}
                onEdit={handleEdit}
                onDelete={handleDelete}
                handleClickOpen={handleClickOpen}
              />
            ))
          ) : (
            <Typography
              sx={{ textAlign: "center" }}
              variant="h6"
              color="textSecondary"
            >
              No passwords found
            </Typography>
          )}
        </div>
      </div>

      <>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Add new password
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <TextField
                      name="account"
                      label="Account"
                      variant="standard"
                      fullWidth
                      required
                      type="text"
                    />
                  </div>
                  <div className="mb-3">
                    <TextField
                      name="username"
                      label="Username/Email"
                      variant="standard"
                      fullWidth
                      required
                      type="text"
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
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
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
                  </div>
                  <div className="mb-3">
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      disabled={showBtnLoader}
                    >
                      {!showBtnLoader ? (
                        "Submit"
                      ) : (
                        <CircularProgress size={25} color="inherit" />
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* view modal  */}
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: "form",
            onSubmit: async (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const aesKey = formJson.aesKey;
              // console.log(aesKey);
              // console.log(viewID);

              const data = {
                passwordId: viewID,
                aesKey,
              };

              try {
                const response = await fetch(
                  API_BASE_URL + "passwords/decrypt",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: token,
                    },
                    body: JSON.stringify(data),
                  }
                );

                const result = await response.json();
                // console.log(result);

                if (result.error) {
                  toast.error(result.message);
                } else {
                  // console.log(result.decryptedPassword);
                  handleClose();
                  setpasstext(result.decryptedPassword);
                  setOpenpass(true);
                }
              } catch (error) {
                // console.log(error);
              }
            },
          }}
        >
          <DialogTitle>View Password</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To view to this password, please enter your AES Key here.
            </DialogContentText>
            <TextField
              autoFocus
              required
              margin="dense"
              name="aesKey"
              label="AES Key"
              type="password"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">View</Button>
          </DialogActions>
        </Dialog>
        {/* show password modal  */}
        <Dialog
          open={openpass}
          onClose={handleClosepass}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Your Password is here"}
          </DialogTitle>
          <DialogContent>
            <p className="p-3" style={{ background: "#f1f1f1" }}>
              {passtext}
            </p>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClosepass}>Close</Button>
          </DialogActions>
        </Dialog>
        {/*Edit Modal */}
        <Dialog onClose={handleCloseedit} open={openedit}>
          <DialogTitle>Edit Password</DialogTitle>
          <form className="mx-5" onSubmit={handleSubmitEdit}>
            <div className="mb-3">
              <TextField
                name="id"
                label="id"
                variant="standard"
                fullWidth
                type="text"
                onChange={handleEditOnChange}
                value={editData.id}
                hidden
              />
              <TextField
                name="account"
                label="Account"
                variant="standard"
                fullWidth
                type="text"
                onChange={handleEditOnChange}
                value={editData.account}
              />
            </div>
            <div className="mb-3">
              <TextField
                name="username"
                label="Username/Email"
                variant="standard"
                fullWidth
                value={editData.username}
                onChange={handleEditOnChange}
                type="text"
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
                />
              </FormControl>
              <p className="text-danger">
                *Note: Give AES Key when you update password.
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
                  "Update"
                ) : (
                  <CircularProgress size={25} color="inherit" />
                )}
              </Button>
            </div>
          </form>
        </Dialog>
        ;
        <Footer />
      </>
    </>
  );
};

export default Dashboard;

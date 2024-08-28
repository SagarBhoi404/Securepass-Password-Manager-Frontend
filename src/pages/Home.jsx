import React from "react";
import Navbar from "../components/Navbar";
import { Button, Card } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="row py-5 px-3">
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
            <h1>Welcome to SecurePass, </h1>
            <h4>
              your ultimate solution for managing and securing your passwords.
            </h4>
            {/* <Button sx={{
                width:'30%'
            }} variant="outlined">Let's Start</Button> */}

            <Link to={"/signup"} className="text-decoration-none">
              Get started now – secure your digital life today!
            </Link>
          </div>
          <div className="col-12 col-lg-6 p-5">
            <img
              className="img-fluid"
              src="/hero.png"
              alt=""
            />
          </div>
        </div>

        <div className="row justify-content-center my-5">
          <h3 className="text-center my-5">Features Overview</h3>
          <div className="col-12 col-lg-6 my-2">
            <Card className="p-3 text-center">
              <h4 className="feature-heading">AES Encryption</h4>
              <p>Secure your passwords with state-of-the-art AES encryption.</p>
            </Card>
          </div>
          <div className="col-12 col-lg-6 my-2">
            <Card className="p-3 text-center">
              <h4 className="feature-heading">User-Specific Encryption Keys</h4>
              <p>Each user has a unique AES key for maximum security.</p>
            </Card>
          </div>
          <div className="col-12 col-lg-6 my-2">
            <Card className="p-3 text-center">
              <h4 className="feature-heading">Easy Access</h4>
              <p>Access your passwords from anywhere, securely.</p>
            </Card>
          </div>
          <div className="col-12 col-lg-6 my-2">
            <Card className="p-3 text-center">
              <h4 className="feature-heading">Search and Manage</h4>
              <p>Quickly find, edit, and delete your passwords with ease.</p>
            </Card>
          </div>
          <div className="col-12 col-lg-6 my-2">
            <Card className="p-3 text-center">
              <h4 className="feature-heading">Cross-Platform</h4>
              <p>Available on web and mobile platforms.</p>
            </Card>
          </div>
        </div>

        <div className="row justify-content-center my-5">
          <h3 className="text-center my-5">About AES Encryption</h3>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            {/* Introduction Section */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  What is AES Encryption?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    "AES (Advanced Encryption Standard) is a widely recognized
                    encryption standard that ensures the confidentiality of your
                    data. It is trusted globally by governments, financial
                    institutions, and security-focused organizations for its
                    strength and reliability."
                  </p>
                </div>
              </div>
            </div>
            {/* How AES Protects Your Data Section */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  How AES Protects Your Data
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <strong>Strong Encryption:</strong>
                  <p>
                    "AES uses a symmetric key encryption technique, where the
                    same key is used for both encryption and decryption. This
                    ensures that only those with the correct key can access your
                    sensitive information."
                  </p>
                  <strong>Key Sizes:</strong>
                  <p>
                    "AES supports multiple key lengths (128, 192, or 256 bits).
                    In our password manager, we utilize AES-256, the strongest
                    form of AES encryption, providing an unbreakable layer of
                    security."
                  </p>
                  <strong>Random Initialization Vectors (IVs):</strong>
                  <p>
                    "To further enhance security, AES uses a unique
                    Initialization Vector (IV) for each encryption operation.
                    This ensures that even if the same password is encrypted
                    multiple times, the resulting encrypted data will always be
                    different."
                  </p>
                </div>
              </div>
            </div>
            {/* Why AES? Section */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Why AES?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <strong>Performance and Security:</strong>
                  <p>
                    "AES is not only secure but also fast and efficient. It is
                    designed to work effectively on a wide range of hardware,
                    making it ideal for applications like ours where performance
                    and security are both critical."
                  </p>
                  <strong>Global Standard:</strong>
                  <p>
                    "Since its adoption by the U.S. government in 2001, AES has
                    become the global standard for data encryption, protecting
                    everything from classified information to online
                    transactions."
                  </p>
                </div>
              </div>
            </div>
            {/* Your Security with AES in SecurePass Section */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  Your Security with AES in SecurePass
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <strong>Personal Encryption Keys:</strong>
                  <p>
                    "Each user in SecurePass has their own unique AES key. This
                    key is never stored on our servers, ensuring that only you
                    have access to your passwords."
                  </p>
                  <strong>End-to-End Encryption:</strong>
                  <p>
                    "From the moment you enter your password, it is encrypted
                    using your personal AES key and remains encrypted both in
                    transit and at rest, providing you with end-to-end
                    security."
                  </p>
                  <strong>Peace of Mind:</strong>
                  <p>
                    "With AES encryption, you can rest assured that your
                    passwords are protected against unauthorized access, giving
                    you the peace of mind you deserve."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;

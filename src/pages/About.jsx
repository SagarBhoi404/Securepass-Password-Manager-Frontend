import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="container mb-5">
        {/* About Us Section */}
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-8 mx-auto text-center">
              <h1>About SecurePass</h1>
              <p className="lead">
                SecurePass is a state-of-the-art password management system
                designed to keep your online credentials safe and secure. Built
                using the latest encryption standards, including AES-256,
                SecurePass ensures that your sensitive information is protected
                from unauthorized access.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <h2>Our Mission</h2>
              <p>
                Our mission is to provide users with a reliable and secure way
                to manage their passwords. In today’s digital world, where cyber
                threats are constantly evolving, it’s crucial to have a tool
                that not only stores your passwords but does so with the highest
                level of security.
              </p>
            </div>
            <div className="col-md-6">
              <h2>Why Choose Us?</h2>
              <p>
                SecurePass offers unique features like user-specific AES keys,
                ensuring that even our servers cannot access your passwords.
                With an emphasis on user security and ease of use, SecurePass
                stands out as the go-to solution for individuals and businesses
                alike.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12 text-center">
              <h2>Meet the Developer</h2>
              <p className="lead">
                Hi, I am Sagar Bhoi, i am a Fullstack web developer, and Mobile
                developer. I'm a passionate and experienced web developer
                specializing in creating dynamic, responsive, and user-friendly
                web applications. With a strong foundation in both front-end and
                back-end technologies, I bring innovative solutions to life.
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12 text-center">
              <img
                src="https://avatars.githubusercontent.com/u/96607918?v=4"
                className="rounded-circle mb-3"
                alt="Developer Image"
                style={{ width: "200px" }}
              />
              <h3>Sagar Bhoi</h3>
              <p>
                Full Stack Web Developer
                <br />
                Expertise in JavaScript, MERN Stack, PHP, Java and more.
              </p>
              <div>
                <a
                  href="https://github.com/SagarBhoi404"
                  target="_blank"
                  title="Github Account"
                  className="link-dark m-1"
                >
                  <GitHubIcon fontSize="large" />
                </a>
                <a
                  href="https://sagarbhoi.in/"
                  target="_blank"
                  title="Portfolio"
                  className="link-dark m-1"
                >
                  <PublicIcon fontSize="large" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;

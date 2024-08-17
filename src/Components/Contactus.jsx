import React from "react";
import emailjs from "emailjs-com";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../Styles/Contact.module.css";
import me from "../Images/mysef.jpg";
import saloma from "../Images/saloma.jpg";
import norty from "../Images/norty.jpg";
import khokha from "../Images/khokha.jpg";
import aboutus from "../Images/aboutus.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
export default function Contactus() {
  const [formData, setFormData] = useState({
    to_name: "Rewaa",
    from_name: "",
    email: "", 
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .send(
        "service_n9ot47p",
        "template_nddc7mv",
        formData,
        "qa_Cs5tj3nnrD5xpi"
      )
      .then((response) => {
        setSending(false);
        setSent(true);
        setFormData({
          to_name: "Rewaa",
          from_name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        setSending(false);
        setError(err.text);
      });
  };
  return (
    <>
      {" "}
      {/* header  */}
      <div className={styles.header}>
        <div className={styles.container}>
          <h1>Meet Our Team</h1>
        </div>
      </div>
      {/* about us  */}
      <div className={styles.aboutUs}>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.content}>
              <div className={styles.teamImg}>
                <img src={me} alt="Rewaa Gaber" />
              </div>
              <div className={styles.content}>
                <h4>Rewaa Gaber</h4>
                <h5>Front-End</h5>
              </div>
              <div className={styles.social}>
                <a href="https://www.facebook.com/" target="_blank">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://x.com/?logout=1723917569208" target="_blank">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://www.linkedin.com/in/rewaa-arafa-8134b0275/" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>{" "}
                <a href="https://github.com/RewaaGaber" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.content}>
              <div className={styles.teamImg}>
                <img src={saloma} alt="Salma Assem" />
              </div>
              <div className={styles.content}>
                <h4>Salma Assem</h4>
                <h5>Front-End</h5>
              </div>
              <div className={styles.social}>
                <a href="#" target="_blank">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#" target="_blank">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="#" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.content}>
              <div className={styles.teamImg}>
                <img src={norty} alt="Nour Noaman" />
              </div>
              <div className={styles.content}>
                <h4>Nour Noaman</h4>
                <h5>Front-End</h5>
              </div>
              <div className={styles.social}>
                <a href="#" target="_blank">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#" target="_blank">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="#" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.content}>
              <div className={styles.teamImg}>
                <img src={khokha} alt="Khoulod Khaled" />
              </div>
              <div className={styles.content}>
                <h4>Khoulod Khaled</h4>
                <h5>Front-End</h5>
              </div>
              <div className={styles.social}>
                <a href="#" target="_blank">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#" target="_blank" >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="#" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* about website */}
      <div className={styles.header}>
        <div className={styles.container}>
          <h1>Explore Our Book Collection</h1>
        </div>
      </div>
      <Card className="container" sx={{ maxWidth: 1000 }}>
        <CardMedia
          sx={{ height: 300 }}
          image={aboutus}
          title="green iguana"
          className={styles.CardMedia}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            BookHub
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Welcome to our website, your ultimate destination for discovering
            and purchasing a diverse range of books. Whether you're an avid
            reader seeking your next great adventure, a student in search of
            academic texts, or someone looking for the perfect gift, we offer an
            extensive collection that caters to all tastes and needs. From
            bestsellers to hidden gems, our curated selection ensures you'll
            find something that piques your interest. Enjoy a seamless shopping
            experience with detailed book descriptions, user reviews, and easy
            navigation, all designed to make your reading journey enjoyable and
            rewarding.
          </Typography>
        </CardContent>
        <CardActions>
          
        <Button
  size="medium" 
  sx={{
    color: "white",
    backgroundColor: "#74593b",
    "&:hover": {
      backgroundColor: "#a0937d",
      transform: "scale(1.05)", 
    },
    transition: "background-color 0.3s ease, transform 0.3s ease",
    padding: "10px 20px", 
    fontWeight: "bold", 
  }}
  component={Link}
  to="/Home"
>
  Learn More
</Button>
        </CardActions>
      </Card>
      {/* Contact Us */}
      {/* Contact Us */}
      <section>
        
        <div className=" p-5 container" style={{paddingTop: '20px'}}>
          <h1 className="text-center mb-4  " style={{paddingTop: '50px'}}>Contact Us</h1>
          <div className="row justify-content-center ">
            <div className="col-md-9">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="from_name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        id="from_name"
                        name="from_name"
                        className="form-control"
                        value={formData.from_name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        className="form-control"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn w-100"
                      style={{
                        backgroundColor: "#74593b",
                        borderColor: "#8B7866",
                        color: "white",
                      }}
                      disabled={sending}
                    >
                      {sending ? "Sending..." : "Send Message"}
                    </button>
                    {sent && (
                      <p className="text-success mt-3">
                        Message sent successfully!
                      </p>
                    )}
                    {error && (
                      <p className="text-danger mt-3">Error: {error}</p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </section>
    </>
  );
}

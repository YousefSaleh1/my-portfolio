import { useState } from "react";
import './ContactForm.css'
import axios from "axios";
function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = {
      name: name,
      email: email,
      subject: subject,
      message: message
    };

    axios
      .post("http://127.0.0.1:8000/api/concats-create", formData, {
        headers: {
          "Accept": "application/json"
        }
      })
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div className="contact-form-component">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="Name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          name="email"
          id="Email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="text"
          name="subject"
          id="Subject"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />

        <textarea
          placeholder="Message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit" className=" rounded-3 w-50 mx-auto d-block">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;

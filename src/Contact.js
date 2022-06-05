import { React, useState } from "react";
// import { Typewriter } from "react-teffex";

function Contact() {
  const FORM_ENDPOINT =
    "https://public.herotofu.com/v1/85c3b750-dbc1-11ec-8be6-4f814e368566";

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  return (
    <div id="contact" className="flush-up">
      <h1 className="contact-name">Contact</h1>
      {submitted ? (
        <div className="thankyou">
          <h2>Thank you!</h2>
          <div>We'll be in touch soon.</div>
        </div>
      ) : (
        <div>
          <form
            id="my-form"
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
          >
            <div className="connect">Let's Connect!</div>
            <input
              className="form"
              type="text"
              placeholder="Your name"
              name="name"
              required
            />
            <input
              className="form"
              type="email"
              placeholder="Email"
              name="email"
              required
            />
            <textarea
              className="form"
              placeholder="Your message"
              name="message"
              required
            />
            <button className="submit" type="submit">
              {" "}
              Submit{" "}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Contact;

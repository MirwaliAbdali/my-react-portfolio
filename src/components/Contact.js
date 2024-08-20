function Contact() {
  // function handleSubmit(e) {
  //   e.preventDefault();
  // }
  return (
    <footer>
      <div className="container contact-container">
        <div className="row justify-content-center">
          <div className="col-md-6 contact-form">
            <h2 className="title text-center">Contact Me</h2>
            <h4 className="sub-title text-center mb-4">Let's Work Together</h4>
            <div className="card contact-card">
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label text-white">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label text-white">
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label text-white">
                      Your Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="5"
                      placeholder="Enter your message"
                      required
                    ></textarea>
                  </div>
                  <button className="btn btn-primary w-100 p-3">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-icons">
        <a
          href="https://www.linkedin.com/in/mirwali-abdali-396867274/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-linkedin"></i>
        </a>
        <a
          href="https://github.com/MirwaliAbdali"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-github"></i>
        </a>
        <a
          href="https://www.instagram.com/mirwaliabdali7860/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-instagram"></i>
        </a>
        <a
          href="https://wa.me/93703174964"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-whatsapp"></i>
        </a>
      </div>
      <div className="copy-right text-center">
        <p>
          &copy; {new Date().getFullYear()} Mirwali Abdali. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Contact;
